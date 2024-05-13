const Libreria = require("../models/Libreria");

//consultar todos las librerias en bbdd
const getLibrerias = async (req, res, next) => {
    try {
        const librerias = await Libreria.find().populate("libros");
        return res.status(200).json(librerias);
    } catch (error){
        return res.estatus(400).json("error");
    }
}

//publicar una libreria
const postLibreria = async (req, res, next) => {
    try {
        const newLibreria = new Libreria(req.body);
        const libreriaGuardada = await newLibreria.save();
        return res.status(201).json(libreriaGuardada);
    } catch (error){
        return res.status(400).json("error");
    }
}

const updateLibreria = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newLibreria = new Libreria(req.body);
        newLibreria._id = id;

        // Encuentra la librería existente por ID
        const libreriaExistente = await Libreria.findById(id);

        //concatenar libros existentes con nuevos
        const librosLibreria = libreriaExistente.libros + newLibreria.libros;
        newLibreria.libros = librosLibreria;
        
        const libreriaActualizada = await Libreria.findByIdAndUpdate(id, newLibreria , { new: true, });

        return res.status(201).json(libreriaActualizada);
    } catch (error) {
        return res.status(400).json({ error: 'Error al actualizar la librería' });
    }
};


//borrar una librería
const deleteLibreria = async (req, res, next) => {
    try {
        const { id } = req.params;
        const libreriaDelete = await Libreria.findByIdAndDelete(id);
        return res.status(200).json(libreriaDelete);
    } catch (error){
        return res.status(400).json("error");
    }
}

module.exports = {
    getLibrerias,
    postLibreria,
    updateLibreria,
    deleteLibreria,
}