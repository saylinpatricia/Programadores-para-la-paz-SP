const express = require('express'); 
const app = express();

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json()); 

// Ruta para Registro
app.post('/registro', (req, res) => {
    const nombre = req.body.nombre; 
    const mensaje = req.body.mensaje; 
    
    res.json({
        estado: "Datos recibidos", 
        nombre: nombre, 
        mensaje: mensaje
    });
});

// Ruta para Incidencia
app.post('/incidencia', (req, res) => { 
    const tipo = req.body.tipo; 
    const descripcion = req.body.descripcion; 
    
    res.json({
        mensaje: "Incidencia registrada", 
        tipo: tipo, 
        descripcion: descripcion
    });
});

// Iniciar servidor
app.listen(3000, () => { 
    console.log('Servidor corriendo en el puerto 3000'); 
});
        
