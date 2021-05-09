const mongoose = require('mongoose');
const Schema = mongoose.Scema;

const buildSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    god: { type: Schema.Types.ObjectId, ref: 'God' },
    item: { type: Schema.Types.ObjectId, ref: 'Item'}
});



module.exports = mongoose.model('Build', buildSchema);