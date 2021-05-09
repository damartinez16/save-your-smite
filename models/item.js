const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    DeviceName: String,
    ItemDescription: {
        Description: String,
        Menuitems: [{
            Description: String,
            Value: String
        },
        {
            Description: String,
            Value: String
        }
        ],
        ItemTier: Number,
        SecondaryDescription: String,
        Price: Number,
        type: String,
        itemIcon_URL: String
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Item', itemSchema);