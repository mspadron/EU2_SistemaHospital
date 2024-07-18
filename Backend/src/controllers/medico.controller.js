const dbPool = require('../db.conection');

const getAllMedico = async (req, res, nex) => {
  try {
    const response = await dbPool.query('SELECT * FROM medicos');
    res.json(response.rows);
  } catch (error) {
    console.error();
  }
};

const getMedico = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await dbPool.query('SELECT * FROM medicos WHERE id = $1', [
      id,
    ]);

    // Validacion en caso de que no exista la tarea
    if (response.rows.length === 0) {
      return res.status(404).json({
        message: 'Medico no encontrado',
      });
    }

    // Mostramos el departamento
    res.json(response.rows[0]);
  } catch (error) {
    console.error();
  }
};

const createMedico = async (req, res, next) => {
  // Obtenemos los campos de nuestro que se manden por el FrontEnd
  const { nombre_m, apellido_m, especialidad_m } = req.body;
  try {
    const response = await dbPool.query(
      'INSERT INTO medicos (nombre, apellido, especialidad) VALUES ($1, $2, $3) RETURNING *',
      [nombre_m, apellido_m, especialidad_m]
    );
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const deleteMedico = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await dbPool.query('DELETE FROM medicos WHERE id = $1', [
      id,
    ]);
    // Validacion en caso de que exista la tarea
    if (response.rowCount === 0) {
      return res.status(404).json({
        message: 'Medico no existe',
      });
    }
    res.json({
      message: 'Medico eliminado',
    });
  } catch (error) {
    console.log(error);
  }
};

const updateMedico = async (req, res, nex) => {
  try {
    const { id } = req.params;
    const { nombre_m, apellido_m, especialidad_m } = req.body;

    const response = await dbPool.query(
      'UPDATE medicos SET nombre = $1, apellido = $2, especialidad = $3 WHERE id = $4 RETURNING *',
      [nombre_m, apellido_m, especialidad_m, id]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({
        message: 'Medico no encontrado',
      });
    }
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllMedico,
  getMedico,
  createMedico,
  deleteMedico,
  updateMedico,
};
