const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true para puerto 465, false para otros puertos
  auth: {
    user: "lacasitadelhornero2023@gmail.com", // tu usuario
    pass: "eqgxgzrtbmdkvyha", // tu contraseña o clave de aplicación
  },
});

// Verificar la conexión de Nodemailer de manera adecuada
transporter.verify((error, success) => {
  if (error) {
    console.error("Error al conectar con NodeMailer:", error);
  } else {
    console.log("NodeMailer conectado con éxito");
  }
});

module.exports = transporter;
