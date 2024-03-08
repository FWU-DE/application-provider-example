import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import { Container, Typography, TextField, Button } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(email, password);
    const isAuthenticated = true;
    if (isAuthenticated) {
      navigate('/offer-list');
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
        Login
      </Typography>

      <TextField
        label="E-Mail"
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextField
        label="Passwort"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        sx={{ mt: 3, backgroundColor: '#0000c4' }}
      >
        Einloggen
      </Button>
    </Container>
  );
};

export default Login;
