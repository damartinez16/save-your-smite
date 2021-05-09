const mongoose = require('mongoose');
const Schema = mongoose.Scema;

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
        Type: String,
        itemIcon_URL: String
    },
}, {
    timestamps: true
});


module.exports = mongoos.model('Item', itemSchema);