import React, { useState } from 'react';
import { TextField, MenuItem, FormControl, InputLabel, Select, Button, Grid } from '@mui/material';

function ProductFilter({ categories, onFilter }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const handleFilter = () => {
    onFilter({ search, category, sort });
  };

  const handleReset = () => {
    setSearch('');
    setCategory('');
    setSort('');
    onFilter({ search: '', category: '', sort: '' });
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: '2rem' }}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            label="Sort by"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="priceAsc">Price: Low to High</MenuItem>
            <MenuItem value="priceDesc">Price: High to Low</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Button variant="contained" color="primary" fullWidth onClick={handleFilter}>
          Apply Filters
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Button variant="outlined" color="secondary" fullWidth onClick={handleReset}>
          Reset Filters
        </Button>
      </Grid>
    </Grid>
  );
}

export default ProductFilter;
