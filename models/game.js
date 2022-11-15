const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Publisher = require('./publisher');

const objectSchema = {
    title: String,
    publisher: {type: Schema.ObjectId, ref: Publisher}
};

const gameSchema = Schema(objectSchema);
const Game = mongoose.model('Game', gameSchema);

module.exports = Game