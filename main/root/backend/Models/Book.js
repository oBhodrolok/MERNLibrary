//As MongoDB stores stuff as a schema-less NoSQL document, it helps to define a structure for all objects to follow
//As mongoose is a library for MongoDB centered around Object Data Modelling (ODM), we use it to enforce specific (semi-rigid) schemas at app. layer
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Represents a Book object with the fields: title, author(s) and a brief description, all String type
let BookSchema = new Schema({
  //defines document properties through an object where the key name corresponds to the property name in the collection
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
  // bookPic:{
  //   type: Date,
  //   required: false,
  //   default: Date.now
  // }
})

//Export moduel to use it elsewhere (routing)
module.exports = mongoose.model('Book', BookSchema)
