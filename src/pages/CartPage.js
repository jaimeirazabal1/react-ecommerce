import React, { useContext } from 'react';
import { Container, Button, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import PageTitle from '../components/PageTitle';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container>
      <PageTitle title="Cart" />
      <List>
        {cartItems.map(item => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`$${item.price}`}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
              <DeleteIcon />
            </IconButton>
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
