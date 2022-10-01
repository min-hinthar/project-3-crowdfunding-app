const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const assetSchema = new Schema({
   title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
   },
   description: {
    type: String,
    required: true,
    unique: true,
    trim: true,
   },
   price: {
    type: Number,
    required: true,
   },
   projectAssignment: {
      type: Schema.Types.ObjectId,
      ref: 'Project'
   },
   createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
   }

});

const Asset = model('Asset', assetSchema);

module.exports = Asset;