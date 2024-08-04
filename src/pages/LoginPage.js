import React, { useContext, useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username);
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Login
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} onClick={handleLogin}>
          Login
        </Button>
      </form>
    </Container>
  );
}

export default LoginPage;
