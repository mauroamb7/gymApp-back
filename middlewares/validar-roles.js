const { response } = require("express");
const User = require("../models/usuario");
const Rol = require("../models/rol");

const adminRole = (req, res = response, next) => {
  if (!req.usuario) {
    res.status(500).json({
      msg: "Se quiere verificar el rol sin validar el token primero",
    });

    const { rol, nombre, apellido } = req.usuario;

    if (rol !== "ADMIN_ROLE") {
      return res.status(401).json({
        msg: `${nombre} ${apellido} no tiene acceso a esta acción`,
      });
    }
  }
};

const isAdmin = async (req, res = response, next) => {
  try {
    const user = await User.findById(req.usuario.id).populate("rol");
    const roles = await Rol.find({ _id: { $in: user.rol } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].nombre === "ADMIN_ROLE") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Se requiere ser admin!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

module.exports = { adminRole, isAdmin };
