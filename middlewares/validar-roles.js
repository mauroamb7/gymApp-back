const { response } = require("express");

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

module.exports = { adminRole };
