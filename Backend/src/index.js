/* Punto de inicio de mi aplicacion */

const express = require('express');
const cors = require('cors');

const app = express();

// Importo todas las rutas que manjera mi servidor

const pacienteRoutes = require('./routes/paciente.routes');
const medicoRoutes = require('./routes/medico.routes');
const consultorioRoutes = require('./routes/consultorio.routes');
const citaRoutes = require('./routes/cita.routes');

app.use(cors());
app.use(express.json());

// Usando las rutas de los pacientes para el CRUD
app.use(pacienteRoutes);
// Usando las rutas de los medicos para el CRUD
app.use(medicoRoutes);
// Usando las rutas de los consultorios para el CRUD
app.use(consultorioRoutes);
// Usando las rutas de las citas para el CRUD
app.use(citaRoutes);

app.listen(4000);
console.log('Server on port 4000');
