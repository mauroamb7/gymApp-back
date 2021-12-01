const { Schema, model } = require("mongoose");

const CuotaSchema = new Schema({
  valor: {
    type: Schema.Types.ObjectId,
    ref: "ValorCuota",
  },
  fechaPago: {
    type: String,
    // set: date => formatDate(date)
  },
  fechaVencimiento: {
    type: String,
  },
});

// function formatDate(date) {
//   var d = new Date(date),
//     month = "" + (d.getMonth() + 1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();

//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;

//   return [day, month, year].join("-");
// }

module.exports = model("Cuota", CuotaSchema);
