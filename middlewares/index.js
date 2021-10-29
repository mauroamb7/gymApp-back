const respErrors = require("../middlewares/validations");
const validarJWT = require("../middlewares/validar-jwt");
const adminRole = require("../middlewares/validar-roles");
const loggedIn = require("../middlewares/validar-loggedIn");

module.exports = {
  ...respErrors,
  ...validarJWT,
  ...adminRole,
  ...loggedIn,
};
