import { Router } from 'express';
import {  obtenerClientes, registrarCliente } from '../controllers/clientes.controller.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/clientes', obtenerClientes);

// Ruta para registrar los clientes
router.post('/registrarcliente', registrarCliente);


export default router;