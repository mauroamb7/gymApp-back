const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/usuario");

//GET - Listar todos los usuarios
const userGet = async (req = request, res = response) => {
  const { page = 1, limit = 5 } = req.query;
  const conditions = { estado: true };

  try {
    // Cuenta y devuelve todos los usuarios con el 'estado' = true
    const [total, usuarios] = await Promise.all([
      User.countDocuments(conditions),
      User.find(conditions)
        .skip(Number(page) - 1)
        .limit(Number(limit)),
    ]);

    res.json({
      total,
      usuarios,
    });
  } catch (error) {
    console.log(error);
  }
};

//POST - Crear usuario
const userPost = async (req, res = response) => {
  //Instancia User con datos del body
  const { nombre, apellido, email, password, rol, dni } = req.body;
  const user = new User({ nombre, apellido, email, password, rol, dni });

  // Encriptar password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  // Crear usuario
  try {
    const userDB = await user.save();

    if (userDB) {
      res.status(201).json({
        msg: "post API - Usuario creado con exito!",
        userDB,
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo guardar de base de datos");
  }
};

// Actualizar usuario
const userPut = async (req, res = response) => {
  const id = req.params.id;
  const { _id, password, email, google, ...resto } = req.body;

  if (password) {
    // Encriptar password
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await User.findByIdAndUpdate(id, resto);

  res.status(400).json({
    msg: "Usuario actualizado correctamente!",
    usuario,
  });
};

//Borrar usuario estado=false
const userDelete = async (req, res = response) => {
  const { id } = req.params;

  try {
    const usuario = await User.findByIdAndUpdate(id, { estado: false });

    //Usuario autenticado
    //const usuarioAutenticado = req.usuario;

    res.json({
      msg: `el usuario ${usuario.nombre} se ha eliminado correctamente!`,
      usuario,
    });
  } catch (error) {
    console.log(error);
  }
};

const userPatch = (req, res = response) => {
  res.json({
    msg: "patch API",
  });
};

module.exports = { userGet, userPost, userDelete, userPatch, userPut };
