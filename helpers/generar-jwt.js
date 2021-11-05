const jwt = require("jsonwebtoken");

const generarJWT = (uid = "", rols) => {
  //Lo retornamos como promesa para usar el Await
  return new Promise((resolve, reject) => {
    const payload = { uid, rols };

    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: "48h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = { generarJWT };
