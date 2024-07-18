import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';

const MedicoList = () => {
  const [medicos, setMedicos] = useState([]);

  const cargarMedicos = async () => {
    try {
      const response = await fetch('http://localhost:4000/medico');
      const data = await response.json();
      setMedicos(data);
    } catch (error) {
      console.error('Error al cargar médicos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/medico/${id}`, {
        method: 'DELETE'
      });
      setMedicos(medicos.filter((medico) => medico.id !== id));
    } catch (error) {
      console.error('Error al eliminar médico:', error);
    }
  };

  useEffect(() => {
    cargarMedicos();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Lista de Médicos</Typography>
      <List>
        {medicos.map((medico) => (
          <ListItem key={medico.id} divider>
            <ListItemText primary={`${medico.nombre} ${medico.apellido}`} secondary={`Especialidad: ${medico.especialidad}`} />
            <Button variant="contained" color="secondary" onClick={() => handleDelete(medico.id)}>Eliminar</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MedicoList;
