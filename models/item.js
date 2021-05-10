const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    DeviceName: String,
    ItemDescription: {
        Description: String,
        Menuitems: [{
            Description: String,
            Value: String
        }],
        SecondaryDescription: String,
    },
    ItemTier: Number,
    Price: Number,
    Type: String,
    itemIcon_URL: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Item', itemSchema);