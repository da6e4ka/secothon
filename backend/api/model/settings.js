const mongoose = require('mongoose');
const {Schema} = mongoose;

let fields = {
    key: {type: String, required: true},
    value: {type: Schema.Types.Mixed, required: true}
};

const SettingsSchema = new Schema(fields);

SettingsSchema.methods.getVal = async function (key) {
    console.log('key', key);
    return key
};

SettingsSchema.methods.getAllVal = async function () {
    let res = {};
    (await this.model('Setting').find({})).forEach(async elem => res[elem.key] = elem.value);
    return res;
};

SettingsSchema.methods.getSettings = async function (key) {
    return await this.model('Setting').findOne({"key": key})
};

SettingsSchema.methods.setVal = async function (key, value) {
    let settings = await this.model('Setting').findOne({"key": key});
    await settings.set("value", value);
    await settings.save();
    return settings;
};

module.exports = mongoose.model('Setting', SettingsSchema);