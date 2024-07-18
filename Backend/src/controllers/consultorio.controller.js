const dbPool = require('../db.conection');

const getAllConsultorio = async (req, res, nex) => {
  try {
    const response = await dbPool.query('SELECT * FROM consultorios');
    res.json(response.rows);
  } catch (error) {
    console.error();
  }
};

const getConsultorio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await dbPool.query(
      'SELECT * FROM consultorios WHERE id = $1',
      [id]
    );

    // Validacion en caso de que no exista la tarea
    if (response.rows.length === 0) {
      return res.status(404).json({
        message: 'Consultorio no encontrado',
      });
    }

    // Mostramos el departamento
    res.json(response.rows[0]);
  } catch (error) {
    console.error();
  }
};

const createConsultorio = async (req, res, next) => {
  // Obtenemos los campos de nuestro que se manden por el FrontEnd
  const { numero_c, piso_p } = req.body;
  try {
    const response = await dbPool.query(
      'INSERT INTO consultorios (numero, piso) VALUES ($1, $2) RETURNING *',
      [numero_c, piso_p]
    );
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const deleteConsultorio = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await dbPool.query(
      'DELETE FROM consultorios WHERE id = $1',
      [id]
    );
    // Validacion en caso de que exista la tarea
    if (response.rowCount === 0) {
      return res.status(404).json({
        message: 'Consultorio no existe',
      });
    }
    res.json({
      message: 'Consultorio eliminado',
    });
  } catch (error) {
    console.log(error);
  }
};

const updateConsultorio = async (req, res, nex) => {
  try {
    const { id } = req.params;
    const { numero_c, piso_p } = req.body;

    const response = await dbPool.query(
      'UPDATE consultorios SET numero = $1, piso = $2 WHERE id = $3 RETURNING *',
      [numero_c, piso_p, id]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({
        message: 'Consultorio no encontrado',
      });
    }
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllConsultorio,
  getConsultorio,
  createConsultorio,
  deleteConsultorio,
  updateConsultorio,
};
