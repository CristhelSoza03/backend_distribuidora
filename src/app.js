import express from 'express';
import cors from 'cors';
import rutasClientes from './routes/clientes.routes.js';
import rutasUsuarios from './routes/usuarios.routes.js';
import rutasProductos from './routes/productos.routes.js';
import rutasAbonos from './routes/abonos.routes.js';
import rutasCompras from './routes/compras.routes.js';
import rutasCreditos from './routes/creditos.routes.js';
import rutasDetalles_Compras from './routes/detalles_compras.routes.js';
import rutasDetalles_Ventas from './routes/detalles_ventas.routes.js';
import rutasVentas from './routes/ventas.routes.js';

const app = express();

// Habilitar CORS para cualquier origen
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use('/api', rutasClientes);
app.use('/api', rutasUsuarios);
app.use('/api', rutasProductos);
app.use('/api', rutasAbonos);
app.use('/api', rutasCompras);
app.use('/api', rutasCreditos);
app.use('/api', rutasDetalles_Compras);
app.use('/api', rutasDetalles_Ventas);
app.use('/api', rutasVentas);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
    message: 'La ruta que ha especificado no se encuentra registrada.'
    });
});

export default app;