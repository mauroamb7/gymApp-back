const { Schema, model } = require("mongoose");

const usuarioSchema = Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    apellido: {
      type: String,
      required: [true, "El apellido es obligatorio"],
    },
    email: {
      type: String,
      required: [true, "El correo es obligatorio"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatorio"],
    },
    dni: {
      type: Number,
      required: [true, "El dni es obligatorio"],
      unique: true,
    },
    rol: [
      {
        type: Schema.Types.ObjectId,
        ref: "Rol",
      },
    ],
    estado: {
      type: Boolean,
      default: true,
    },
    google: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//Para no mostrar los campos "__v" y "password" en la respuesta
usuarioSchema.methods.toJSON = function () {
  const { __v, password, updatedAt, _id, ...usuario } = this.toObject();

  //cambiamos el campo _id por uid solo para la respuesta
  usuario.uid = _id;
  return usuario;
};

module.exports = model("Usuario", usuarioSchema);
