const server = require("./src/app");
const { conn } = require("./src/db.js");

module.exports = async (req, res) => {
  try {
    // Intentar conectar con la base de datos
    await conn.sync({ force: false });

    // Si todo sale bien, responder con la solicitud de Express
    server(req, res);
  } catch (error) {
    console.error("Error al conectar con la base de datos o al procesar la solicitud:", error);

    // Responder con un error 500 detallado
    res.status(500).json({
      error: "Error en el servidor",
      message: error.message,
      stack: error.stack,
    });
  }
};
