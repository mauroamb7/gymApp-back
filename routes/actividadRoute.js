const { Router } = require("express");

const { agregarActividad } = require("../controllers/actividadController");

const router = Router();

//Nueva actividad
router.post("/", agregarActividad);

module.exports = router;
