import { pool } from '../db.js';

// Obtener todos los detalles_ventas
export const obtenerDetalles_Ventas= async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Detalles_Ventas');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los detalles de venta.',
      error: error
    });
  }
};

// Obtener un detalle_venta por su ID
export const obtenerDetalle_Venta = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Detalles_Ventas WHERE id_detalle_venta = ?', [req.params.id]);
    
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. El ID ${req.params.id} del detalle de venta no fue encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos del detalle de venta.'
    });
  }
};