const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //paths de las rutas
    this.paths = {
      auth: "/api/auth",
      user: "/api/user",
      valorCuota: "/api/valorCuota",
      actividad: "/api/actividad",
    };

    //DB connection
    this.database();

    //Middlewares
    this.middlewares();

    //Rutas
    this.routes();

    //Manejar demás rutas (angular)
    this.app.get("*", (req, res) => {
      res.sendFile("index.html", { root: "public" });
    });
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y paseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.user, require("../routes/user"));
    this.app.use(this.paths.valorCuota, require("../routes/valorCuotaRoute"));
    this.app.use(this.paths.actividad, require("../routes/actividadRoute"));
  }

  async database() {
    await dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

module.exports = Server;
