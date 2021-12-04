const { Schema, model } = require("mongoose");

const actividadSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
});

module.exports = model("Actividad", actividadSchema);
