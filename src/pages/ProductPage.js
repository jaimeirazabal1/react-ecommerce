import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { products } from '../data/products';

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          alt={product.name}
          height="300"
          image={product.image}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" component="p">
            {product.description}
          </Typography>
          <Typography variant="h6" component="p">
            ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductPage;
