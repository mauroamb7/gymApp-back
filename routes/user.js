const { Router } = require("express");
const { check } = require("express-validator");
const {
  userGet,
  userPost,
  userDelete,
  userPatch,
  userPut,
} = require("../controllers/userController");
const {
  rolValido,
  existeEmail,
  existeId,
  existeDni,
} = require("../helpers/db-validators");

const { respErrors, validarJWT, adminRole } = require("../middlewares/index");

const router = Router();

router.get("/", userGet);

//POST - Crear usuario
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("apellido", "El apellido es obligatorio").notEmpty(),
    check(
      "password",
      "Ingrese contraseña que contenga al menos 6 caracteres "
    ).isLength({ min: 6 }),
    check("email", "El email no es valido").isEmail(),
    check("email").custom(existeEmail),
    check("dni", "Dni obligatorio").isLength({ min: 8, max: 8 }),
    check("dni").custom(existeDni),

    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROL', 'USER_ROL'])
    check("rol").custom(rolValido),

    //Respuesta en caso de haber errores
    respErrors,
  ],
  userPost
);

// Actualizar usuario
router.put(
  "/:id",
  [
    check("id", "formato de id incorrecto").isMongoId(),
    check("id").custom(existeId),
    check("rol").custom(rolValido),
    //Respuesta en caso de haber errores
    respErrors,
  ],
  userPut
);

// Borrar usuario
router.delete(
  "/:id",
  [
    validarJWT,
    adminRole,
    check("id", "formato de id incorrecto").isMongoId(),
    check("id").custom(existeId),
    //Respuesta en caso de haber errores
    respErrors,
  ],
  userDelete
);

router.patch("/", userPatch);

module.exports = router;
