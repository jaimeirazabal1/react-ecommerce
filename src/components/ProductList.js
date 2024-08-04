import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Grid, Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

function ProductList() {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to={`/product/${product.id}`}>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="p">
                  ${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
