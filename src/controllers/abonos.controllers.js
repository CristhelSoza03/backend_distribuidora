import { pool } from '../db.js';

// Obtener todos los abonos
export const obtenerAbonos= async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Abonos');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los abonos.',
      error: error
    });
  }
};

// Obtener un abonos por su ID
export const obtenerAbono = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Abonos WHERE id_abono = ?', [req.params.id]);
    
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. El ID ${req.params.id} del abono no fue encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos del abono.'
    });
  }
};