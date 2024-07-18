import React, { useState } from 'react';
import PacienteList from '../components/PacienteList';
import PacienteForm from '../components/PacienteForm';
import { Container, Typography, Box } from '@mui/material';

const Pacientes = () => {
  const [update, setUpdate] = useState(false);

  const handleSave = () => {
    setUpdate(!update);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h3" gutterBottom>Gestión de Pacientes</Typography>
        <PacienteForm onSave={handleSave} />
        <PacienteList key={update} />
      </Box>
    </Container>
  );
};

export default Pacientes;
