const { response, request } = require("express");

const { ValorCuota, Actividad } = require("../models");

//Nuevo valor
const agregarValor = async (req = request, res = response) => {
  const { valor, descripcion, actividad } = req.body;

  if (!valor || valor < 0) {
    res.status(400).json({
      ok: false,
      msg: "Debe insertar un valor",
    });
  }

  const descripcionLower = descripcion.toLowerCase();

  //Buscamos actividad en base de datos y validamos si existe
  const actividadDB = await Actividad.findOne({ nombre: actividad });

  if (!actividadDB) {
    res.status(400).json({
      ok: false,
      msg: "no existe actividad",
    });
  }

  const valorCreate = new ValorCuota({
    valor,
    descripcion: descripcionLower,
    actividad: actividadDB._id,
  });

  try {
    const valorSaved = await valorCreate.save();

    res.status(200).json({
      ok: true,
      msg: "Valor de cuota creado!",
      valorSaved,
    });
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo guardar de base de datos");
  }
};

//Listar valores
const listarValor = async (req = request, res = response) => {
  try {
    const valorList = await ValorCuota.find({}).populate("actividad", "nombre");

    if (!valorList) {
      res.json({
        ok: false,
        msg: "No se encontraron valores",
      });
    }

    res.json({
      valorList,
    });
  } catch (error) {}
};

//Eliminar valor de cuota de la base de datos
const eliminarValor = async (req = request, res = response) => {
  const id = req.params.id;

  try {
    const valorDeleted = await ValorCuota.findByIdAndRemove(id);
    if (valorDeleted) {
      res.json({
        ok: true,
        msg: "Valor borrado correctamente",
        valorDeleted,
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un problema");
  }
};

const modificarValor = async (req = request, res = response) => {};

module.exports = {
  agregarValor,
  listarValor,
  eliminarValor,
  modificarValor,
};
