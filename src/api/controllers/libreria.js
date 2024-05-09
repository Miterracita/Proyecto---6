const Libreria = require("../models/Libreria");

//consultar todos las librerias en bbdd
const getLibreria = async (req, res, next) => {
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

module.exports = {
    getLibreria,
    postLibreria,
}