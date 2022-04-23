const { User, Product, Category, Order } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });
        return user;
      }
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    categories: async () => {
      return await Category.find();
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(
          "No adventurer found with that email address"
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Fix Thee credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const product = await Product.findById(products).populate("category");
        const order = new Order({ products });
        const decrement = product.price;
        const user = await User.findById(context.user._id);
        if (user.runes < product.price) {
          console.log("mine some runes ya lazy");
          return;
        }

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { orders: order } }
        );
        const test = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $inc: { runes: -decrement } },
          { new: true }
        );

        return test;
      }

      throw new AuthenticationError("Not logged in");
    },
    removeProduct: async (parent, args, context) => {
      if (context.user) {
        console.log(args);
        const productRemove = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { orders: { id: args.id } } },
          { new: true }
        );
        return productRemove;
      }
    },
    addRunes: async (parent, args, context) => {
      if (context.user) {
        const increment = 1000;
        const newRunes = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $inc: { runes: increment } },
          { new: true }
        );
        return newRunes;
      }
    },
    // removeRunes: async (parent, { runes, price }, context) => {
    //   if (context.user) {
    //     const cost = runes - price;
    //     const newRunes = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $set: { runes: cost } },
    //       { new: true }
    //     );
    //     return newRunes;
    //   }
    // },
  },
};

module.exports = resolvers;
