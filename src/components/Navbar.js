import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Ecommerce
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/cart">
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
