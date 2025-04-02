import { pool } from '../db.js';

// Obtener todos los clientes
export const obtenerClientes= async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Clientes');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los clientes.',
      error: error
    });
  }
};

// Registrar una nuevo cliente
export const registrarCliente = async (req, res) => {
  try {
    const { nombre, apellido, celular, direccion, cedula } = req.body;

    const [result] = await pool.query(
      'INSERT INTO clientes (nombre, apellido, celular, direccion, cedula) VALUES (?, ?)',
      [nombre, apellido, celular, direccion, cedula]
    );

    res.status(201).json({ id_cliente: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el cliente.',
      error: error
    });
  }
};
