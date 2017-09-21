const mongoose = require('mongoose');
 
const accountSchema = mongoose.Schema({
    phoneNumber: {type:String, required:true}
  }, {
    timestamps: { type: Date, createdAt: 'created_at' }
  }
);
 
const Account = mongoose.model('Account', accountSchema);
 
module.exports = Account;