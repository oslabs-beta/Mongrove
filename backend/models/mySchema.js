
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  mongoose.connect('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  dbName: "testdb1"
  });

  const testSchema = new Schema({name: String});

  module.exports = mongoose.model("mySchema", testSchema);
  