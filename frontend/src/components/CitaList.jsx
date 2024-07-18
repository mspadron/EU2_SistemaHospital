import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import CitaForm from './CitaForm'; // Importa el formulario

const CitaList = () => {
  const [citas, setCitas] = useState([]);
  const [selectedCita, setSelectedCita] = useState(null); // Estado para la cita seleccionada

  const cargarCitas = async () => {
    try {
      const response = await fetch('http://localhost:4000/cita');
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error('Error al cargar citas:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/cita/${id}`, {
        method: 'DELETE'
      });
      setCitas(citas.filter((cita) => cita.id !== id));
    } catch (error) {
      console.error('Error al eliminar cita:', error);
    }
  };

  const handleEdit = (cita) => {
    setSelectedCita(cita);
  };

  useEffect(() => {
    cargarCitas();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Lista de Citas</Typography>
      <List>
        {citas.map((cita) => (
          <ListItem key={cita.id} divider>
            <ListItemText primary={`${cita.paciente_id} - ${cita.medico_id}`} secondary={`${cita.fecha} - ${cita.hora}`} />
            <Button variant="contained" color="primary" onClick={() => handleEdit(cita)}>Editar</Button>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(cita.id)}>Eliminar</Button>
          </ListItem>
        ))}
      </List>
      {selectedCita && (
        <CitaForm cita={selectedCita} onSave={cargarCitas} onCancel={() => setSelectedCita(null)} />
      )}
    </div>
  );
};

export default CitaList;
