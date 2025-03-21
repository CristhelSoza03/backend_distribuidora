import { Router } from 'express';
import {  obtenerCreditos, obtenerCredito } from '../controllers/creditos.controllers.js';

const router = Router();

// Ruta para obtener todos los creditos
router.get('/creditos', obtenerCreditos);

// Ruta para obtener un credito por su ID
router.get('/credito/:id', obtenerCredito);

export default router;