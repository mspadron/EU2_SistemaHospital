import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Sistema de Gestión Médica
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/citas">Citas</Button>
          <Button color="inherit" component={Link} to="/consultorios">Consultorios</Button>
          <Button color="inherit" component={Link} to="/medicos">Medicos</Button>
          <Button color="inherit" component={Link} to="/pacientes">Pacientes</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
