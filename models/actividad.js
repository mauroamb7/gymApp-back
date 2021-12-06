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

actividadSchema.methods.toJSON = function () {
  const { __v, ...actividad } = this.toObject();
  return actividad;
};

module.exports = model("Actividad", actividadSchema);
