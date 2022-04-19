const { User } = require("../models");
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
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No adventurer found with that email address");
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
    saveCart: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedCart: args.input } },
          { new: true, runValidators: true},
        );
        return updatedUser;
      }
    },
    removeCart: async (parent, args, context) => {
      if (context.user) {
        const cartRemove = await User.findOneAndUpdate(
          {_id:context.user._id},
          {$pull: {savedCarts: {cartId: args.cartId}}},
          {new: true}
        );
        return cartRemove;
      }
    },
    addRunes: async (parent, {runes}, context) => {
      if (context.user) {
        const increment = Math.abs(runes) * + 1000
        const newRunes = await User.findOneAndUpdate(
          {_id:context.user._id},
          {$inc: {runes: increment}},
          {new: true},
        );
        return newRunes;
      }
    },
    removeRunes: async (parent, {runes, price}, context) => {
      if (context.user) {
        const cost = runes - price
        const newRunes = await User.findOneAndUpdate(
          {_id:context.user._id},
          {$set: {runes: cost}},
          {new: true},
        );
        return newRunes;
      }
    },
  },
};

module.exports = resolvers;
