import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Order Confirmation
      </Typography>
      <Typography variant="body1" component="p">
        Thank you for your order! Your order has been placed successfully.
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} component={Link} to="/">
        Back to Home
      </Button>
    </Container>
  );
}

export default ConfirmationPage;
