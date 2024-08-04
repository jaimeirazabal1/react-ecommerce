import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardContent, CardMedia, Button, Snackbar, Typography } from '@mui/material';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import PageTitle from '../components/PageTitle';

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container style={{ marginTop: '2rem' }}>
      <PageTitle title={product.name} />
      <Card>
        <CardMedia
          component="img"
          alt={product.name}
          height="300"
          image={product.image}
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {product.description}
          </Typography>
          <Typography variant="h6" component="p">
            ${product.price}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Product added to cart"
        action={
          <Button color="secondary" size="small" onClick={() => window.location.href = '/cart'}>
            View Cart
          </Button>
        }
      />
    </Container>
  );
}

export default ProductPage;
