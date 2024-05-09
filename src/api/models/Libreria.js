const mongoose = require('mongoose');

const libreriaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    direccion: { type: String },
    web: { type: String },
    libros: [{ type: mongoose.Types.ObjectId, ref: "libros", required: false }],
    //el nombre de la ref debe ser igual al de la coleccion a relacionar
  },
  {
    timestamps: true,
    collection: "librerias"
  }
);

const Libreria = mongoose.model('librerias', libreriaSchema, 'librerias');
module.exports = Libreria;
