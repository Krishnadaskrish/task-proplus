const mongoose = require('mongoose')


const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
  category: String,
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }]
});

module.exports = mongoose.model('course',CourseSchema)

