const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //paths de las rutas
    this.authPath = "/api/auth";
    this.usersPath = "/api/user";
    this.valorCuotaPath = "/api/valorCuota";

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
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usersPath, require("../routes/user"));
    this.app.use(this.valorCuotaPath, require("../routes/valorCuotaRoute"));
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
