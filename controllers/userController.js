const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/usuario");
const Rol = require("../models/rol");

//GET - Listar todos los usuarios
const userList = async (req = request, res = response) => {
  const { page = 1, limit = 5 } = req.query;
  const conditions = { estado: true };

  try {
    // Cuenta y devuelve todos los usuarios con el 'estado' = true
    const [total, usuarios] = await Promise.all([
      User.countDocuments(conditions),
      User.find(conditions)
        .skip(Number(page) - 1)
        .limit(Number(limit))
        .populate("rol", "nombre"),
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
const userCreate = async (req, res = response) => {
  const { nombre, apellido, email, password, dni, rol } = req.body;
  const emailLower = email.toLowerCase();

  //Instancia User con datos del body
  const user = new User({
    nombre,
    apellido,
    email: emailLower,
    password,
    rol,
    dni,
  });

  // Encriptar password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  //Guardar id del modelo Rol, si no se asigna "USER_ROLE" por defecto
  if (rol) {
    const foundRols = await Rol.find({ rol: { $in: rol } });
    user.rol = foundRols.map((role) => role._id);
  } else {
    const role = await Rol.findOne({ nombre: "USER_ROLE" });
    user.rol = [role._id];
  }

  // Crear usuario
  try {
    const userSaved = await user.save();

    if (userSaved) {
      res.status(201).json({
        ok: true,
        msg: "post API - Usuario creado con exito!",
        userSaved,
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo guardar de base de datos");
  }
};

// Actualizar usuario
const userUpdate = async (req, res = response) => {
  const id = req.params.id;
  const { _id, password, email, google, ...resto } = req.body;

  if (password) {
    // Encriptar password
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await User.findByIdAndUpdate(id, resto).populate("rol");

  res.status(200).json({
    ok: true,
    msg: "Usuario actualizado correctamente!",
    usuario,
  });
};

//Borrar usuario estado=false
const userDelete = async (req, res = response) => {
  const { id } = req.params;

  try {
    const usuario = await User.findByIdAndUpdate(id, {
      estado: false,
    });

    //Usuario autenticado
    //const usuarioAutenticado = req.usuario;

    res.status(200).json({
      ok: true,
      msg: `el usuario '${usuario.nombre} ${usuario.apellido}' se ha eliminado correctamente!`,
      usuario,
    });
  } catch (error) {
    console.log(error);
  }
};

//Dar de alta estado=true
userAlta = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  try {
    const usuario = await User.findByIdAndUpdate(id, { estado });

    res.status(200).json({
      ok: true,
      msg: `el usuario '${usuario.nombre} ${usuario.apellido}' se ha renovado correctamente!`,
      usuario,
    });
  } catch (error) {}
};

//Listar clientes con rol USER_ROLE
const clientesList = async (req = request, res = response) => {
  const { page = 1, limit = 5 } = req.query;
  const conditions = {
    // estado: true,
    rol: { $in: ["60d267703ff11921983066b8"] },
  };

  try {
    // Cuenta clientes con 'estado: true' y devuelve todos los usuarios con el 'estado' = true y rol = 'USER_ROLE' pasando su id
    const [usuarios, total] = await Promise.all([
      //usuarios
      User.find(conditions)
        .skip(Number(page) - 1)
        .limit(Number(limit))
        .populate("rol"),
      //total
      User.countDocuments({
        rol: { $in: ["60d267703ff11921983066b8"] },
        estado: true,
      }),
    ]);

    res.json({
      total,
      usuarios,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get user by Id
const getUserById = async (req, res) => {
  const uid = req.params.id;

  try {
    const user = await User.findById(uid);

    if (!user) {
      return res.status(500).json({
        ok: false,
        msg: "No se encontró usuario",
      });
    }

    return res.status(200).json({
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userList,
  userCreate,
  userDelete,
  userUpdate,
  clientesList,
  getUserById,
  userAlta,
};
