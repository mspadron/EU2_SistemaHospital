import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const ConsultorioForm = ({ onSave }) => {
  const [consultorio, setConsultorio] = useState({
    numero_c: '',
    piso_p: ''
  });

  const handleChange = (e) => {
    setConsultorio({ ...consultorio, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/consultorio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consultorio)
      });
      const data = await response.json();
      if (response.ok) {
        onSave();
      } else {
        console.error('Error al crear consultorio:', data);
      }
    } catch (error) {
      console.error('Error al crear consultorio:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>Crear Nuevo Consultorio</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Número de Consultorio"
            name="numero_c"
            value={consultorio.numero_c}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Ubicación (Piso)"
            name="piso_p"
            value={consultorio.piso_p}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Guardar</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ConsultorioForm;
