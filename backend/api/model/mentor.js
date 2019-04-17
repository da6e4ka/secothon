const mongoose = require('mongoose');
const { Schema } = mongoose;

let fields = {
    index: { type: Number, default: 0 },
    name: { type: String, required: true },
    company: { type: String },
    description: { type: String },
    job: {type: String, required: true},
    picture: {type: String, required: true},
    fb: {type: String},
    vk: {type: String},
};

const MentorSchema = Schema(fields);


MentorSchema.methods.getSorted = async function () {
    function sortArrayByFunction(func) {
        return function (a, b) {
            if (func(a) > func(b)) return 1;
            if (func(a) < func(b)) return -1;
            return 0
        }
    }

    let mentors = await this.model('Mentor').find({});
    mentors.sort(sortArrayByFunction(elem => [elem.index, elem.name]));
    return mentors
};


module.exports = mongoose.model('Mentor', MentorSchema);