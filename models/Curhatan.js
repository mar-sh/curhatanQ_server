const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const curhatanSchema = new Schema({
  title: String,
  description: String,
  url: String,
  userId: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }
}, {
  timestamps: true
})

const Curhatan = mongoose.model('Curhatan', curhatanSchema);

module.exports = Curhatan;