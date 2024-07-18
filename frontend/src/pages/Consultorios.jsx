import React, { useState } from 'react';
import ConsultorioList from '../components/ConsultorioList';
import ConsultorioForm from '../components/ConsultorioForm';
import { Container, Typography, Box } from '@mui/material';

const Consultorios = () => {
  const [update, setUpdate] = useState(false);

  const handleSave = () => {
    setUpdate(!update);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h3" gutterBottom>Gestión de Consultorios</Typography>
        <ConsultorioForm onSave={handleSave} />
        <ConsultorioList key={update} />
      </Box>
    </Container>
  );
};

export default Consultorios;
