const dbPool = require('../db.conection');

const getAllCita = async (req, res, nex) => {
  try {
    const response = await dbPool.query('SELECT * FROM citas');
    res.json(response.rows);
  } catch (error) {
    console.error();
  }
};

const getCita = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await dbPool.query('SELECT * FROM citas WHERE id = $1', [
      id,
    ]);

    // Validacion en caso de que no exista la tarea
    if (response.rows.length === 0) {
      return res.status(404).json({
        message: 'Cita no encontrado',
      });
    }

    // Mostramos el departamento
    res.json(response.rows[0]);
  } catch (error) {
    console.error();
  }
};

const createCita = async (req, res, next) => {
  // Obtenemos los campos de nuestro que se manden por el FrontEnd
  const { paciente_id, medico_id, fecha, hora, consultorio_id } = req.body;
  try {
    const response = await dbPool.query(
      'INSERT INTO citas (paciente_id, medico_id, fecha, hora, consultorio_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [paciente_id, medico_id, fecha, hora, consultorio_id]
    );
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const deleteCita = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await dbPool.query('DELETE FROM citas WHERE id = $1', [
      id,
    ]);
    // Validacion en caso de que exista la tarea
    if (response.rowCount === 0) {
      return res.status(404).json({
        message: 'Cita no existe',
      });
    }
    res.json({
      message: 'Cita eliminado',
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCita = async (req, res, nex) => {
  try {
    const { id } = req.params;
    const { paciente_id, medico_id, fecha, hora, consultorio_id } = req.body;

    const response = await dbPool.query(
      'UPDATE medicos SET paciente_id = $1, medico_id = $2, fecha = $3, hora = $4, consultorio_id = $5 WHERE id = $6 RETURNING *',
      [paciente_id, medico_id, fecha, hora, consultorio_id, id]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({
        message: 'Cita no encontrado',
      });
    }
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCita,
  getCita,
  createCita,
  deleteCita,
  updateCita,
};
