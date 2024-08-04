import React, { useContext, useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cartItems } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    // Aquí agregarías la lógica para procesar el pago con un proveedor como Stripe o PayPal
    console.log('Processing payment...');
    navigate('/confirmation');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Checkout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Name on Card"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Card Number"
            fullWidth
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Expiry Date"
            fullWidth
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="CVV"
            fullWidth
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="p">
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handlePayment}
          >
            Pay Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckoutPage;
