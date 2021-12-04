const { response, request } = require("express");

const Actividad = require("../models/actividad");

//Nueva actividad
const agregarActividad = async (req = request, res = response) => {
  const { nombre, descripcion } = req.body;

  const actividadCreate = new Actividad({
    nombre,
    descripcion,
  });

  try {
    const actividadSaved = await actividadCreate.save();

    if (actividadSaved) {
      res.status(200).json({
        ok: true,
        msg: "Actividad creada!",
        actividadSaved,
      });
    }
  } catch (error) {}
};

module.exports = {
  agregarActividad,
};
