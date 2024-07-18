const { Router } = require('express');

const {
  getAllConsultorio,
  getConsultorio,
  createConsultorio,
  deleteConsultorio,
  updateConsultorio,
} = require('../controllers/consultorio.controller');

const router = Router();

// Obtener todos los consultorios
router.get('/consultorio', getAllConsultorio);

// Obtener un solo consultorio por el id
router.get('/consultorio/:id', getConsultorio);

// Agregar un consultorio
router.post('/consultorio', createConsultorio);

// Eliminar un consultorio por el id
router.delete('/consultorio/:id', deleteConsultorio);

// Actualizar un consultorio por el id
router.put('/consultorio/:id', updateConsultorio);

module.exports = router;
