const { Router } = require("express");

const {
  agregarValor,
  listarValor,
  modificarValor,
  eliminarValor,
} = require("../controllers/valorCuotaController");

const { validarJWT, isAdmin } = require("../middlewares/index");

const router = Router();

//Nuevo valor
router.post("/", [validarJWT, isAdmin], agregarValor);

//Listar valores
router.get("/", listarValor);

//Modificar valor
router.put("/:id", [validarJWT, isAdmin], modificarValor);

//Eliminar valor
router.delete("/:id", [validarJWT, isAdmin], eliminarValor);

module.exports = router;
