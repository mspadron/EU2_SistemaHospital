const { Router } = require('express');

const {
  getAllMedico,
  getMedico,
  createMedico,
  deleteMedico,
  updateMedico,
} = require('../controllers/medico.controller');

const router = Router();

// Obtener todos los medico
router.get('/medico', getAllMedico);

// Obtener un solo medico por el id
router.get('/medico/:id', getMedico);

// Agregar un medico
router.post('/medico', createMedico);

// Eliminar un medico por el id
router.delete('/medico/:id', deleteMedico);

// Actualizar un medico por el id
router.put('/medico/:id', updateMedico);

module.exports = router;
