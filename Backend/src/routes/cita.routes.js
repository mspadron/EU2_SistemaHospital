const { Router } = require('express');

const {
  getAllCita,
  getCita,
  createCita,
  deleteCita,
  updateCita,
} = require('../controllers/cita.controller');

const router = Router();

// Obtener todos los consultorios
router.get('/cita', getAllCita);

// Obtener un solo consultorio por el id
router.get('/cita/:id', getCita);

// Agregar un consultorio
router.post('/cita', createCita);

// Eliminar un consultorio por el id
router.delete('/cita/:id', deleteCita);

// Actualizar un consultorio por el id
router.put('/cita/:id', updateCita);

module.exports = router;
