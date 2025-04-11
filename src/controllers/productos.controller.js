import { pool } from '../db.js';

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Productos');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los productos.',
      error: error
    });
  }
};

// Registrar una nuevo producto
export const registrarProducto = async (req, res) => {
  try {
    const { nombre_producto, descripcion, categoria, precio_unitario, stock } = req.body;

    const [result] = await pool.query(
      'INSERT INTO productos (nombre_producto, descripcion, categoria, precio_unitario, stock ) VALUES (?, ?)',
      [nombre_producto, descripcion, categoria, precio_unitario, stock ]
    );

    res.status(201).json({ id_producto: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el producto.',
      error: error
    });
  }
};