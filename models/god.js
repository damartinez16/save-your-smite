const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const godSchema = new Schema({
    id: String,
    name: { type: String, required: true },
    filename: String,
    type: String,
    selected: { type: Boolean, default: false }
}, {
    timestamps: true
});



module.exports = mongoose.model('God', godSchema);