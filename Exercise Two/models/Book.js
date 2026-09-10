const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
    },
    publishedYear: {
      type: Number,
      min: [1000, 'Published year must be a valid year'],
      max: [new Date().getFullYear() + 1, 'Published year cannot be in the far future'],
    },
    genre: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
