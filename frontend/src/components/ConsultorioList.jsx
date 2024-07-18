import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';

const ConsultorioList = () => {
  const [consultorios, setConsultorios] = useState([]);

  const cargarConsultorios = async () => {
    try {
      const response = await fetch('http://localhost:4000/consultorio');
      const data = await response.json();
      setConsultorios(data);
    } catch (error) {
      console.error('Error al cargar consultorios:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/consultorio/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setConsultorios(consultorios.filter((consultorio) => consultorio.id !== id));
      } else {
        console.error('Error al eliminar consultorio:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar consultorio:', error);
    }
  };

  useEffect(() => {
    cargarConsultorios();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Lista de Consultorios</Typography>
      <List>
        {consultorios.map((consultorio) => (
          <ListItem key={consultorio.id} divider>
            <ListItemText 
              primary={`Consultorio ${consultorio.numero}`} 
              secondary={`Ubicación: ${consultorio.piso}`} 
            />
            <Button variant="contained" color="secondary" onClick={() => handleDelete(consultorio.id)}>Eliminar</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ConsultorioList;
