const { request, response } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");

const loginController = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    //Verificar si existe email - en el populate traemos el campo rol de la tabla rol
    const usuario = await Usuario.findOne({ email }).populate("rol", "nombre");

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
    const token = await generarJWT(usuario.id, usuario.rol);

    res.json({
      ok: true,
      nombre: usuario.nombre,
      email: usuario.email,
      uid: usuario.id,
      rol: usuario.rol,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Algo salió mal",
    });
  }
};

const revalidarToken = async (req, res = response) => {
  const { id, rol } = req.usuario;

  // Generar el JWT
  const token = await generarJWT(id, rol);

  return res.json({
    ok: true,
    uid: id,
    rol,
    token,
  });
};

// const logoutController = (req, res) => {
//   req.logout();
//   req.session.destroy();
//   res.redirect("/");
// };

module.exports = {
  loginController,
  // logoutController,
  revalidarToken,
};
