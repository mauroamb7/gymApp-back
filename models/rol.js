const { Schema, model } = require("mongoose");

const RolSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El rol es obligatorio"],
  },
});

//Para no mostrar los campos "id" en la respuesta
// RolSchema.methods.toJSON = function () {
//   const { _id, ...rol } = this.toObject();

//   return rol;
// };

module.exports = model("Rol", RolSchema);
