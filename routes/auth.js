const { Router } = require("express");
const { check } = require("express-validator");
const {
  loginController,
  // logoutController,
  revalidarToken,
} = require("../controllers/authController");
const { validarJWT } = require("../middlewares/validar-jwt");

const { respErrors, loggedIn } = require("../middlewares/index");

const router = Router();

router.post(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").notEmpty(),
    respErrors,
  ],
  loginController
);

// Validar y revalidar token
router.get("/renew", validarJWT, revalidarToken);

//router.get("/logout", loggedIn, logoutController);

module.exports = router;
