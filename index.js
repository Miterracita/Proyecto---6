require("dotenv").config(); //para leer la variable de conexión bbdd en el archivo .env
const express = require("express");
const { connectDB } = require("./src/config/db");
const librosRouter = require('./src/api/routes/libro');
const libreriaRouter = require('./src/api/routes/libreria');

const app = express();
connectDB();

// para que el servidor pueda recoger datos en formato json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/libros', librosRouter);
//para poder ver el listado de libros accedemos a la ruta /libros

app.use('/librerias', libreriaRouter);
//para poder ver el listado de librerías accedemos a la ruta /libros

app.use('*', (req, res, next) => {
	const error = new Error('Ruta no encontrada'); 
	error.status = 404;
	next(error); 
  });


//controlador de errores de express para next, debe ir al final del archivo
app.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Error inesperado');
});

//al final del archivo
app.listen(3000, () => {
    console.log("Servidor funcionando en la ruta http://localhost:3000");
})