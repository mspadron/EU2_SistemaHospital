import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const MedicoForm = ({ onSave }) => {
  const [medico, setMedico] = useState({
    nombre_m: '',
    apellido_m: '',
    especialidad_m: ''
  });

  const handleChange = (e) => {
    setMedico({ ...medico, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/medico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(medico)
      });
      await response.json();
      onSave();
    } catch (error) {
      console.error('Error al crear médico:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>Registrar Nuevo Médico</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre"
            name="nombre_m"
            value={medico.nombre_m}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellido"
            name="apellido_m"
            value={medico.apellido_m}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Especialidad"
            name="especialidad_m"
            value={medico.especialidad_m}
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

export default MedicoForm;
