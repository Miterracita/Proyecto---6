const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema(
  {
    // _id: { type: mongoose.Types.ObjectId, required: true},
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    idioma: { type: String, required: true },
    paginas: { type: Number },
    edicionBolsillo: { type: Boolean },
  },
  {
    timestamps: true,
    collection: "libros"
  }
);

const Libro = mongoose.model('libros', libroSchema, 'libros');
module.exports = Libro;
