const mongoose = require("mongoose");

mongoose
    .connect(process.env.URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("dbConectada"))
    .catch((e) => console.log("error de conexión " + e));
