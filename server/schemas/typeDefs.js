const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    cartCount: Int
    savedCart: [Cart]
    runes: Int
  }

  type Cart {
    image: String
    name: String!
    id: ID!
    description: String
    effect: String
    type: String
    price: Int
  }

  input CartInput {
    image: String
    name: String!
    id: ID!
    description: String
    effect: String
    type: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCart(cart: CartInput!): User
    removeCart(cartId: ID!): User
    addRunes(_id: ID!, runes: Int!): User
    removeRunes(_id: ID!, runes: Int!): User
  }
`;

module.exports = typeDefs;
