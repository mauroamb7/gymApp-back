const { validationResult } = require("express-validator");

// Respuesta de las validaciones de los campos
const respErrors = (req, res, next) => {
  //Devuelve errores del middleware check()
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

module.exports = {
  respErrors,
};
