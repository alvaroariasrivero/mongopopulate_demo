const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Videogame';
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.once("open", () => console.log("DB connected"));

module.exports = mongoose;
