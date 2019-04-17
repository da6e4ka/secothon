const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

let fields = {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    passwordHash: String,
    email: { type: String, required: true, unique: true },
    about: String,
    role: { default: 'undefined', type: String },
    isVerify: { default: false, type: Boolean },
    verifyToken: String,
    avatar: { default: '', type: String },
    VKUid: Number,
    VK: {
        token: String,
        uid: Number,
        email: String,
        avatar: String
    },
    Facebook: { default: undefined, type: String },
    Github: { default: undefined, type: String },
    otherSocial: { default: undefined, type: String},
    administrator: { default: false, type: Boolean },
    recoveryToken: String,
    project: { default: "", type: String },
    paid: { default: false, type: Boolean }
};

const UserSchema = Schema(fields, {
    timestamps: { createdAt: 'creAt', updatedAt: 'upAt' }
});

UserSchema.index({email: 1}, {unique: true});

UserSchema.virtual('password').get(function () {
    return this.password;
});

UserSchema.methods.setPassword = async function(password, cb) {
    this.password = password;
    let salt = await bcrypt.genSalt();
    this.passwordHash = await bcrypt.hash(password, salt);
};

UserSchema.methods.isPassword = async function(raw, cb) {
    return bcrypt.compare(raw, this.passwordHash);
};


module.exports = mongoose.model('User', UserSchema);