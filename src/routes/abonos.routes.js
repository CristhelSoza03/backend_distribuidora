import { Router } from 'express';
import {  obtenerAbonos, obtenerAbono} from '../controllers/abonos.controllers.js';

const router = Router();

// Ruta para obtener todos los abonos
router.get('/abonos', obtenerAbonos);

// Ruta para obtener un abono por su ID
router.get('/abono/:id', obtenerAbono);

export default router;