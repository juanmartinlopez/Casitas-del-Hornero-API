require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");

const server = express();

//*********MIDDLEWARES*********/
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

//*********RUTAS*********/
server.use("/", routes);

// ✅ Vercel espera una función, así que exportamos el handler
module.exports = server;
