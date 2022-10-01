const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const projectSchema = new Schema({
   name: {
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
   pledgeGoal: {
    type: Number,
    required: true,
   },
   projectManager: {
    type: Schema.Types.ObjectId,
    ref: 'User',
   },
   createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
   },
   assets: 
   [
    {
        type: Schema.Types.ObjectId,
        ref: 'Asset',
    },
],
});

const Project = model('Project', projectSchema);

module.exports = Project;