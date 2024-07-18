import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';

const PacienteList = () => {
  const [pacientes, setPacientes] = useState([]);

  const cargarPacientes = async () => {
    try {
      const response = await fetch('http://localhost:4000/paciente');
      const data = await response.json();
      setPacientes(data);
    } catch (error) {
      console.error('Error al cargar pacientes:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/paciente/${id}`, {
        method: 'DELETE'
      });
      setPacientes(pacientes.filter((paciente) => paciente.id !== id));
    } catch (error) {
      console.error('Error al eliminar paciente:', error);
    }
  };

  useEffect(() => {
    cargarPacientes();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Lista de Pacientes</Typography>
      <List>
        {pacientes.map((paciente) => (
          <ListItem key={paciente.id} divider>
            <ListItemText 
              primary={`${paciente.nombre} ${paciente.apellido}`} 
              secondary={`Fecha de Nacimiento: ${paciente.fecha_nacimiento} - Email: ${paciente.email}`} 
            />
            <Button variant="contained" color="secondary" onClick={() => handleDelete(paciente.id)}>Eliminar</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PacienteList;
