import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String!, $email: String, $password: String!) {
    updateUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        runes
      }
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation saveCart($cart: CartInput!) {
    saveCart(cart: $cart) {
      _id
      username
      cartCount
      runes
      savedCart {
        image: String
        name: String!
        id: ID!
        description: String
        effect: String
        type: String
      }
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation removeCart($cartId: ID!) {
    removeCart(cartId: $cartId) {
        _id
        username
        cartCount
        runes
        savedCart {
          image: String
          name: String!
          id: ID!
          description: String
          effect: String
          type: String
      }
    }
  }
`;
