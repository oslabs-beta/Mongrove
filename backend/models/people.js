
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  mongoose.connect('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  dbName: "Student"
  });

  const testSchema = new Schema({field: String});

  module.exports = mongoose.model("people", testSchema);
  