const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    god: { type: Schema.Types.ObjectId, ref: 'God' },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item'}],
    isSubmitted: { type: Boolean, default: false}
}, {
    timestamps: true
});

buildSchema.methods.addItemToBuild = async function (itemId) {

    const build = this;
    const buildItem = build.items.find(buildItem => buildItem._id.equals(itemId));
    if (buildItem) {
      return
    } else {
      const item = await mongoose.model('Item').findById(itemId);
      build.items.push( item );
      
    }
    // return the save() method's promise
    return build.save();
  };
  
buildSchema.methods.addGodToBuild = async function (godId) {
  const build = this;
  if (build.length) {
    return
  } else {
    const god = await mongoose.model('God').findById(godId)
    god.selected = true;
    build.god = god
  }
  return build.save();
}


buildSchema.statics.getBuild = function(userId) {
    return this.findOneAndUpdate(
      // query
      { user: userId, isSubmitted: false },
      { user: userId },
      { upsert: true, new: true }
    )
  };


module.exports = mongoose.model('Build', buildSchema);