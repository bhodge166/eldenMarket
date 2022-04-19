const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const cartSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  effect: {
    type: String,
    required: true,
  },
  // saved book id from eldenringAPI
  id: {
    type: String,
    required: true,
  },

  type: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },
});

module.exports = cartSchema;
