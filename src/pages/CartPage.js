import React from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function CartPage() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 20.0 }
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Cart Page
      </Typography>
      <List>
        {cartItems.map(item => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`$${item.price}`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" component="p">
        Total: ${totalPrice}
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} component={Link} to="/checkout">
        Proceed to Checkout
      </Button>
    </Container>
  );
}

export default CartPage;
