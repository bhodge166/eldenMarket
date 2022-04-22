const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  effect: {
    type: String,
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
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
