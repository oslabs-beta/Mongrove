
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  mongoose.connect('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  dbName: "d1"
  });

  const testSchema = new Schema({enter-field-name: String});

  module.exports = mongoose.model("Schema", testSchema);
  