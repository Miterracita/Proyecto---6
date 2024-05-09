const librosRouter = require("express").Router();
const { getLibros, getLibroById, getLibrosByTitulo, postLibros, updateLibros, deleteLibros } = require("../controllers/libro");

librosRouter.get('/:id', getLibroById);
librosRouter.get('/titulo/:titulo', getLibrosByTitulo);

librosRouter.get("/", getLibros);
librosRouter.post("/nuevo", postLibros);
librosRouter.put("/:id", updateLibros);
librosRouter.delete("/:id", deleteLibros);

module.exports = librosRouter;

//a partir de la ruta establecida en el index app.use('/libros', librosRouter); sumamos, es decir
// libros/titulo - libros/id