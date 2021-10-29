const { Router } = require("express");
const { check } = require("express-validator");
const { loginController } = require("../controllers/authController");
const { respErrors } = require("../middlewares/validations");

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

router.get("/logout", loggedIn, logoutController);

module.exports = router;
