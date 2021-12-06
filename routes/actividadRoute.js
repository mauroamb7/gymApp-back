const { Router } = require("express");

const {
  agregarActividad,
  listarActividades,
} = require("../controllers/actividadController");

const router = Router();

//Nueva actividad
router.post("/", agregarActividad);

//Listar actividades
router.get("/", listarActividades);

module.exports = router;
