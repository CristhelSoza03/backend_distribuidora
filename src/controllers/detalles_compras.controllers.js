import { pool } from '../db.js';

// Obtener todos los detalles_compras
export const obtenerDetalles_Compras= async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Detalles_Compras');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los detalles de compras.',
      error: error
    });
  }
};

// Obtener un detalle_compra por su ID
export const obtenerDetalle_Compra = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Compra WHERE id_detalle_compra = ?', [req.params.id]);
    
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. El ID ${req.params.id} del detalle de compra no fue encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los detalles de la compra.'
    });
  }
};