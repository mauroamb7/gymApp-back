const { Schema, model } = require("mongoose");

const valorCuotaSchema = new Schema({
  valor: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
  },
  actividad: {
    type: Schema.Types.ObjectId,
    ref: "Actividad",
  },
});

valorCuotaSchema.methods.toJSON = function () {
  const { __v, ...valor } = this.toObject();
  return valor;
};

module.exports = model("ValorCuota", valorCuotaSchema);
