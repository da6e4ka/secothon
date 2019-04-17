const mongoose = require('mongoose');
const { Schema } = mongoose;

let fields = {
    index: { type: Number, default: 0 },
    name: { type: String, required: true },
    picture: { type: String, default: '' },
    description : {type: String, required: true }
};

const NominationSchema = Schema(fields);

module.exports = mongoose.model('Nomination', NominationSchema);