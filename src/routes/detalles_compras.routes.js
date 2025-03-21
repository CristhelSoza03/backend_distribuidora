import { Router } from 'express';
import {  obtenerDetalles_Compras, obtenerDetalle_Compra} from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Ruta para obtener todos los detalles_compras
router.get('/detalles_compras', obtenerDetalles_Compras);

// Ruta para obtener un detalle_compra por su ID
router.get('/detalle_Compra/:id', obtenerDetalle_Compra);

export default router;