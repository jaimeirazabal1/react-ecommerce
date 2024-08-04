import React, { useState } from 'react';
import { Container, Pagination } from '@mui/material';
import ProductList from '../components/ProductList';
import PageTitle from '../components/PageTitle';
import ProductFilter from '../components/ProductFilter';
import { products } from '../data/products';
import { STORE_NAME } from '../constants';

const PRODUCTS_PER_PAGE = 6;

function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [...new Set(products.map(p => p.category))];

  const handleFilter = ({ search, category, sort }) => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (sort) {
      if (sort === 'priceAsc') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (sort === 'priceDesc') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (sort === 'newest') {
        filtered = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <Container>
      <PageTitle title={`Welcome to ${STORE_NAME}`} description="Discover the best products at TechStore. From the latest gadgets to the most innovative electronics, find everything you need in one place." />
      <ProductFilter categories={categories} onFilter={handleFilter} />
      <ProductList products={displayedProducts} />
      <Pagination
        count={Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)}
        page={currentPage}
        onChange={handlePageChange}
        style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
}

export default HomePage;
