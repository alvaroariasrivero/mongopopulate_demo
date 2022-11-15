const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectSchema = {
    companyName: String,
    firstParty: Boolean,
    website: String
};

const publisherSchema = Schema(objectSchema);
const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;