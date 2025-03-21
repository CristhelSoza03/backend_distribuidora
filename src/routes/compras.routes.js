import { Router } from 'express';
import {  obtenerCompras, obtenerCompra } from '../controllers/compras.controllers.js';

const router = Router();

// Ruta para obtener todos los compras
router.get('/compras', obtenerCompras);

// Ruta para obtener un compra por su ID
router.get('/compra/:id', obtenerCompra);

export default router;