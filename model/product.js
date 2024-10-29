const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const product = new Schema({
    id: { type: ObjectId }, // khóa chính
    productName: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
    category: { type: ObjectId, ref: 'category' },//khoa phu
});
module.exports = mongoose.models.product || mongoose.model('product', product);