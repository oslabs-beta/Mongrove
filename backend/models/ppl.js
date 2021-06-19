
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  mongoose.connect('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
<<<<<<< HEAD:backend/models/ppl.js
  dbName: "sush"
||||||| 7cf7af5:backend/models/mySchema.js
  dbName: "myDB"
=======
  dbName: "d1"
>>>>>>> fd845d6296965c1b820857a960f549b9506f247f:backend/models/mySchema.js
  });

<<<<<<< HEAD:backend/models/ppl.js
  const testSchema = new Schema({field: String});
||||||| 7cf7af5:backend/models/mySchema.js
  const testSchema = new Schema({name: String});
=======
  const testSchema = new Schema({enter-field-ame: String});
>>>>>>> fd845d6296965c1b820857a960f549b9506f247f:backend/models/mySchema.js

  module.exports = mongoose.model("ppl", testSchema);
  