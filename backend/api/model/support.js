const mongoose = require('mongoose');
const { Schema } = mongoose;

let fields = {
    index: { type: Number, default: 0 },
    name: { type: String,required: true },
    link: { type: String, required: true },
    picture: { type: String, default: '' }
};

const SupportSchema = Schema(fields);


SupportSchema.methods.getSorted = async function () {
    function sortArrayByFunction(func) {
        return function (a, b) {
            if (func(a) > func(b)) return 1;
            if (func(a) < func(b)) return -1;
            return 0
        }
    }

    let support = await this.model('Support').find({});
    support.sort(sortArrayByFunction(elem => [elem.index, elem.name]));
    return support
};

module.exports = mongoose.model('Support',SupportSchema);