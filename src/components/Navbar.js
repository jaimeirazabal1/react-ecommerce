import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { STORE_NAME } from '../constants';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            {STORE_NAME}
          </Link>
        </Typography>
        {user ? (
          <>
            <Typography variant="body1" style={{ marginRight: '1rem' }}>
              Hello, {user.username}
            </Typography>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
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
