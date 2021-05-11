const mongoose = require('mongoose');
const Schema = mongoose.Scema;

const buildSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    god: { type: Schema.Types.ObjectId, ref: 'God' },
    items: { type: Schema.Types.ObjectId, ref: 'Item'},
    isSubmitted: { type: Boolean, default: false}
}, {
    timestamps: true
});

buildSchema.methods.addItemToBuild = async function (itemId) {
    // this keyword is bound to the cart (order doc)
    const build = this;
    // Check if the item already exists in the cart
    const buildItem = build.items.find(buildItem => buildItem.item._id.equals(itemId));
    if (buildItem) {
      return
    } else {
      // Get the item from the "catalog"
      const item = await mongoose.model('Item').findById(itemId);
      build.items.push({ item });
      
    }
    // return the save() method's promise
    return build.save();
  };

buildSchema.statics.getBuild = function(userId) {
    // 'this' is bound to the model (don't use an arrow function)
    // return the promise that resolves to a cart (unpaid order)
    return this.findOneAndUpdate(
      // query
      { user: userId, isSubmitted: false },

      { user: userId },
      // upsert option creates the doc if it doesn't exist!
      { upsert: true, new: true }
    );
  };


module.exports = mongoose.model('Build', buildSchema);