import { Router } from 'express';
import {  obtenerDetalles_Ventas, obtenerDetalle_Venta} from '../controllers/detalles_ventas.controllers.js';

const router = Router();

// Ruta para obtener todos los detalles_ventas
router.get('/detalles_ventas', obtenerDetalles_Ventas);

// Ruta para obtener un detalle_venta por su ID
router.get('/detalle_Venta/:id', obtenerDetalle_Venta);

export default router;