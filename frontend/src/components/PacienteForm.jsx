import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const PacienteForm = ({ onSave }) => {
  const [paciente, setPaciente] = useState({
    nombre_p: '',
    apellido_p: '',
    fecha_nacimiento_p: '',
    email_p: ''
  });

  const handleChange = (e) => {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/paciente', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paciente)
      });
      await response.json();
      onSave();
    } catch (error) {
      console.error('Error al crear paciente:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>Registrar Nuevo Paciente</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre"
            name="nombre_p"
            value={paciente.nombre_p}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellido"
            name="apellido_p"
            value={paciente.apellido_p}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Fecha de Nacimiento"
            name="fecha_nacimiento_p"
            type="date"
            value={paciente.fecha_nacimiento_p}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Correo Electrónico"
            name="email_p"
            value={paciente.email_p}
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

export default PacienteForm;
