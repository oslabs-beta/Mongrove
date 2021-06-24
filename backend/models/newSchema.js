
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  mongoose.connect('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  dbName: "dbtest"
  });

  const testSchema = new Schema({enter-field-nme: String});

  module.exports = mongoose.model("newSchema", testSchema);
  