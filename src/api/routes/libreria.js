const libreriaRouter = require("express").Router();
const { getLibreria, postLibreria } = require("../controllers/libreria");

libreriaRouter.get("/", getLibreria);
libreriaRouter.post("/nueva", postLibreria);

module.exports = libreriaRouter;