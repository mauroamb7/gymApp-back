const { Router } = require("express");
const { check } = require("express-validator");
const {
  userList,
  userCreate,
  userDelete,
  //userPatch,
  userUpdate,
  clientesList,
} = require("../controllers/userController");
const {
  rolValido,
  existeEmail,
  existeId,
  existeDni,
} = require("../helpers/db-validators");

const { respErrors, validarJWT, isAdmin } = require("../middlewares/index");

const router = Router();

//Listar todos los usuarios
router.get("/", userList);

// List users with rol USER_ROLE
router.get("/clientes", clientesList);

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
    check("dni", "Dni obligatorio").notEmpty(),
    check("dni").custom(existeDni),

    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROL', 'USER_ROL'])
    // check("rol").custom(rolValido),

    //Respuesta en caso de haber errores
    respErrors,
  ],
  userCreate
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
  userUpdate
);

// Borrar usuario
router.delete(
  "/:id",
  [
    validarJWT,
    isAdmin,
    check("id", "formato de id incorrecto").isMongoId(),
    check("id").custom(existeId),
    //Respuesta en caso de haber errores
    respErrors,
  ],
  userDelete
);

//router.patch("/", userPatch);

module.exports = router;
