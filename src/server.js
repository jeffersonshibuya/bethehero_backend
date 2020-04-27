const colors = require("colors");
const app = require("./app");

const port = process.env.PORT ? process.env.PORT : 3000;

console.log(
  "\nServidor iniciado em: " + colors.cyan(`http://localhost:${port}/`)
);
app.listen(port);
