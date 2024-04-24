const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ['MultipleChoice', 'TrueFalse', 'FillInBlank'] },
  title: { type: String, required: true },
  quiz: { type: String, required: true }, 
  points: { type: Number, required: true },
  question: { type: String, required: true },
  correctAnswer: { type: mongoose.Schema.Types.Mixed, required: function() {
    return this.type === 'MultipleChoice' || this.type === 'TrueFalse';
  }},
  possibleAnswers: { type: [String], required: function() {
    return this.type === 'MultipleChoice';
  }},
  correctAnswers: { type: [String], required: function() {
    return this.type === 'FillInBlank';
  }},
}, 
{ collection: "questions" });

export default questionSchema;