const mongoose = require('mongoose');
const { Schema } = mongoose;
const Settings = require('./settings');

let fields = {
    index: { type: Number, default: 0 },
    name: { type: String, required: true },
    picture: { type: String, default: '' },
    description : {type: String, required: true },
    link: { type: String, required: true },
    partnerType: {type: String, default: "Партнер"}
};

const PartnerSchema = Schema(fields);


PartnerSchema.methods.getSorted = async function () {
    function sortArrayByFunction(func) {
        return function (a, b) {
            if (func(a) > func(b)) return 1;
            if (func(a) < func(b)) return -1;
            return 0
        }
    }

    let partners = await this.model('Partner').find({});
    let partnersType = await Settings().getVal("partnersType");
    partners.sort(sortArrayByFunction(elem => [partnersType.indexOf(elem.partnerType), elem.index, elem.name]));
    // console.log("Partner sorted:");
    // partners.forEach(elem => console.log(elem.name));
    return partners
};

module.exports = mongoose.model('Partner',PartnerSchema);