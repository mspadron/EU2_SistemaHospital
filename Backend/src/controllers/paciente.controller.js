const dbPool = require('../db.conection');

const getAllPaciente = async (req, res, nex) => {
  try {
    const response = await dbPool.query('SELECT * FROM pacientes');
    res.json(response.rows);
  } catch (error) {
    console.error();
  }
};

const getPaciente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await dbPool.query(
      'SELECT * FROM pacientes WHERE id = $1',
      [id]
    );

    // Validacion en caso de que no exista la tarea
    if (response.rows.length === 0) {
      return res.status(404).json({
        message: 'Paciente no encontrado',
      });
    }

    // Mostramos el departamento
    res.json(response.rows[0]);
  } catch (error) {
    console.error();
  }
};

const createPaciente = async (req, res, next) => {
  // Obtenemos los campos de nuestro que se manden por el FrontEnd
  const { nombre_p, apellido_p, fecha_nacimiento_p, email_p } = req.body;
  try {
    const response = await dbPool.query(
      'INSERT INTO pacientes (nombre, apellido, fecha_nacimiento, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre_p, apellido_p, fecha_nacimiento_p, email_p]
    );
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const deletePaciente = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await dbPool.query('DELETE FROM pacientes WHERE id = $1', [
      id,
    ]);
    // Validacion en caso de que exista la tarea
    if (response.rowCount === 0) {
      return res.status(404).json({
        message: 'Paciente no existe',
      });
    }
    res.json({
      message: 'Paciente eliminado',
    });
  } catch (error) {
    console.log(error);
  }
};

const updatePaciente = async (req, res, nex) => {
  try {
    const { id } = req.params;
    const { nombre_p, apellido_p, fecha_nacimiento_p, email_p } = req.body;

    const response = await dbPool.query(
      'UPDATE pacientes SET nombre = $1, apellido = $2, fecha_nacimiento = $3, email = $4 WHERE id = $5 RETURNING *',
      [nombre_p, apellido_p, fecha_nacimiento_p, email_p, id]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({
        message: 'Paciente no encontrado',
      });
    }
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPaciente,
  getPaciente,
  createPaciente,
  deletePaciente,
  updatePaciente,
};
