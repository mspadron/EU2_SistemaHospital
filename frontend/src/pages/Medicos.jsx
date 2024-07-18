import React, { useState } from 'react';
import MedicoList from '../components/MedicoList';
import MedicoForm from '../components/MedicoForm';
import { Container, Typography, Box } from '@mui/material';

const Medicos = () => {
  const [update, setUpdate] = useState(false);

  const handleSave = () => {
    setUpdate(!update);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h3" gutterBottom>Gestión de Médicos</Typography>
        <MedicoForm onSave={handleSave} />
        <MedicoList key={update} />
      </Box>
    </Container>
  );
};

export default Medicos;
