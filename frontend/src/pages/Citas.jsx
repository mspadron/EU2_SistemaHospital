import React, { useState } from 'react';
import CitaList from '../components/CitaList';
import CitaForm from '../components/CitaForm';
import { Container, Typography, Box } from '@mui/material';

const Citas = () => {
  const [update, setUpdate] = useState(false);

  const handleSave = () => {
    setUpdate(!update);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h3" gutterBottom>Gestión de Citas</Typography>
        <CitaForm onSave={handleSave} />
        <CitaList key={update} />
      </Box>
    </Container>
  );
};

export default Citas;
