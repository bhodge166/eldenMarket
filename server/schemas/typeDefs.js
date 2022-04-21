const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    orders: [Order]
    runes: Int
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    image: String
    title: String!
    id: ID!
    description: String
    effect: String
    type: String
    price: Int
    drops: [String]
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  input ProductInput {
    image: String
    title: String!
    id: ID!
    description: String
    effect: String
    type: String
    price: Int
    drops: [String]
    category: Category
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    removeProduct(id: ID!): User
    addRunes: User
    removeRunes(_id: ID!, runes: Int!): User
  }
`;

module.exports = typeDefs;
