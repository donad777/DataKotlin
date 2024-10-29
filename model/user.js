const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const user = new Schema({
    email: { type: String, unique: true, require: true }, // khóa chính
    fullName: { type: String, require: true },
    password: { type: String, require: true },
});
module.exports = mongoose.models.user || mongoose.model('user', user);
