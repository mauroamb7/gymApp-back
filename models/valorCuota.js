const { Schema, model } = require("mongoose");

const valorCuotaSchema = new Schema({
  valor: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
  },
});

valorCuotaSchema.methods.toJSON = function () {
  const { _id, __v, ...valor } = this.toObject();
  return valor;
};

module.exports = model("ValorCuota", valorCuotaSchema);
