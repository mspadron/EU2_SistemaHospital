const { Router } = require('express');

const {
  getAllPaciente,
  getPaciente,
  createPaciente,
  deletePaciente,
  updatePaciente,
} = require('../controllers/paciente.controller');

const router = Router();

// Obtener todos los pacientes
router.get('/paciente', getAllPaciente);

// Obtener un solo paciente por el id
router.get('/paciente/:id', getPaciente);

// Agregar un paciente
router.post('/paciente', createPaciente);

// Eliminar un paciente por el id
router.delete('/paciente/:id', deletePaciente);

// Actualizar un paciente por el id
router.put('/paciente/:id', updatePaciente);

module.exports = router;
