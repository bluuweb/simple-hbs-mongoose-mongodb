const express = require("express");
const { create } = require("express-handlebars");
require("dotenv").config();
require("./config/db");

const app = express();

const hbs = create({
    partialsDir: ["views/components"],
    extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));
app.use(
    "/css/bootstrap.min.css",
    express.static(
        __dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css"
    )
);
app.use(
    "/js/bootstrap.min.js",
    express.static(
        __dirname + "/node_modules/bootstrap/dist/js/bootstrap.min.js"
    )
);

const Fruta = require("./models/Fruta");
app.get("/", async (req, res) => {
    try {
        // https://mongoosejs.com/docs/api/query.html#query_Query-lean
        const frutas = await Fruta.find().lean();
        res.render("home", {
            frutas,
        });
    } catch (error) {
        console.log(error);
    }

    // res.render("home", {
    //     frutas: [
    //         "banana",
    //         "cebollas",
    //         "lechuga",
    //         "pimenton",
    //         "papas",
    //         "tomate",
    //     ],
    // });
});

app.listen(5000, () => console.log("andando 🎉🎉🎉"));
