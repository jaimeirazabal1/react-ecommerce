import React from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from '../components/ProductList';

function HomePage() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to MyShop
      </Typography>
      <ProductList />
    </Container>
  );
}

export default HomePage;
