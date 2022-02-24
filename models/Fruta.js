const mongoose = require("mongoose");
const { Schema } = mongoose;

const frutaSchema = new Schema({
    nombre: String,
});

const Fruta = mongoose.model("Fruta", frutaSchema);
module.exports = Fruta;
