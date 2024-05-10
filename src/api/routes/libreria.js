const libreriaRouter = require("express").Router();
const { getLibrerias, postLibreria, updateLibreria, deleteLibreria } = require("../controllers/libreria");


libreriaRouter.get("/", getLibrerias);
libreriaRouter.post("/nueva", postLibreria);
libreriaRouter.put("/:id", updateLibreria);
libreriaRouter.delete("/eliminar", deleteLibreria);

module.exports = libreriaRouter;