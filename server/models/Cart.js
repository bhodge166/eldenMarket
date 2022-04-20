const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const cartSchema = new Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  effect: {
    type: String,
  },
  id: {
    type: String,
    required: true,
  },

  type: {
    type: String,
  },

  price: {
    type: Number,
  },

  drops: {
    type: Array,
  },
});

module.exports = cartSchema;
