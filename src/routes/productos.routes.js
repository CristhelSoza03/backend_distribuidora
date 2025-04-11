import { Router } from 'express';
import {  obtenerProductos, registrarProducto} from '../controllers/productos.controller.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/productos', obtenerProductos);

// Ruta para registrar los productos
router.post('/registrarproducto', registrarProducto);


export default router;