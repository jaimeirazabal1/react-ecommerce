import React, { useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  useEffect(() => {
    // Simular el envío de un correo electrónico
    console.log('Sending confirmation email...');
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Order Confirmed
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Thank you for your purchase! Your order has been successfully processed.
      </Typography>
      <Typography variant="body2" component="p" gutterBottom>
        A confirmation email has been sent to your email address.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
      >
        Continue Shopping
      </Button>
    </Container>
  );
}

export default ConfirmationPage;
