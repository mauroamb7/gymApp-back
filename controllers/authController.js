const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");

const loginController = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    //Verificar si existe email
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario o contraseña incorrectos",
      });
    }

    //Verificar si usuario esta activo (estado === true)
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "Usuario o contraseña incorrectos",
      });
    }

    //Verificar password
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario o contraseña incorrectos",
      });
    }

    //Genera JWT
    const token = await generarJWT(usuario.id);

    res.json({
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Algo salió mal",
    });
  }
};

const logoutController = (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
};

module.exports = {
  loginController,
  logoutController,
};
