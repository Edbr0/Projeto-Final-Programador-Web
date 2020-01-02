const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
const routes = require("./routes/routes");

//Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Public
app.use(express.static(path.join(__dirname, "public")));

//Rotas
app.use("/", routes);

app.listen(8080);
