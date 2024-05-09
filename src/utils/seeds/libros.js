const libros = require("../../data/libros");
const Libro = require("../../api/models/Libro");
const mongoose = require("mongoose");

// Conexión a la base de datos
mongoose.connect("mongodb+srv://anadiseny:Lle16VtjphKiuXoS@cluster0.golx2lf.mongodb.net/?retryWrites=true&w=majority")
  .then(async () => {
    try {
      // Buscamos todos los libros
      const allLibros = await Libro.find();

      // Si existen libros previamente, dropearemos (borraremos) la colección
      if (allLibros.length) {
        await Libro.collection.drop(); // La función drop borra la colección
        console.log("Libros existentes eliminados de la base de datos.");
      }

      // Insertamos muchos libros
      await Libro.insertMany(libros);
      console.log("Libros insertados correctamente!");
      console.log(libros);
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      // Nos desconectamos de la base de datos
      await mongoose.disconnect();
      console.log("Desconectamos de la BBDD");
    }
  })
  .catch((err) => console.error(`Error conectando a la base de datos: ${err}`));