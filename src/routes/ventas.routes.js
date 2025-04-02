import { Router } from 'express';
import {  obtenerVentas, obtenerventa} from '../controllers/ventas.controller.js'

const router = Router();

// Ruta para obtener todos los ventas
router.get('/ventas', obtenerVentas);

// Ruta para obtener un venta por su ID
router.get('/venta/:id', obtenerventa);

export default router;