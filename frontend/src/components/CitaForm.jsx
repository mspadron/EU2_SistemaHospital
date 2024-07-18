import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const CitaForm = ({ cita, onSave, onCancel }) => {
  const [citaData, setCitaData] = useState({
    paciente_id: '',
    medico_id: '',
    fecha: '',
    hora: '',
    consultorio_id: ''
  });

  useEffect(() => {
    if (cita) {
      setCitaData(cita);
    }
  }, [cita]);

  const handleChange = (e) => {
    setCitaData({ ...citaData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = cita ? 'PUT' : 'POST';
      const url = cita ? `http://localhost:4000/cita/${cita.id}` : 'http://localhost:4000/cita';
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(citaData)
      });
      await response.json();
      onSave();
      if (onCancel) onCancel(); // Cancelar la edición después de guardar
    } catch (error) {
      console.error(`Error al ${cita ? 'editar' : 'crear'} cita:`, error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>{cita ? 'Editar Cita' : 'Crear Nueva Cita'}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Paciente ID"
            name="paciente_id"
            value={citaData.paciente_id}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Medico ID"
            name="medico_id"
            value={citaData.medico_id}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Fecha"
            type="date"
            name="fecha"
            value={citaData.fecha}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Hora"
            type="time"
            name="hora"
            value={citaData.hora}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Consultorio ID"
            name="consultorio_id"
            value={citaData.consultorio_id}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            {cita ? 'Actualizar' : 'Guardar'}
          </Button>
          {cita && (
            <Button variant="contained" color="secondary" onClick={onCancel}>
              Cancelar
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

export default CitaForm;
