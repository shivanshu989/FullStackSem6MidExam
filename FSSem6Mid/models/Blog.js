const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  desc: String,
  mark: String,
  date: Date
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;