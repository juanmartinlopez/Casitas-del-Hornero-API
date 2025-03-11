const server = require("./src/app");
const { conn } = require("./src/db.js");

module.exports = async (req, res) => {
  try {
    await conn.sync({ force: false }); // Sincronizar base de datos
    server(req, res); // Pasar la solicitud a Express
  } catch (error) {
    res.status(500).json({ error: "Error al conectar con la base de datos" });
  }
};
