import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CheckoutPage() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Checkout Page
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Credit Card"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} component={Link} to="/confirmation">
          Place Order
        </Button>
      </form>
    </Container>
  );
}

export default CheckoutPage;
