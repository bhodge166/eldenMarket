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

export const ADD_RUNES = gql`
  mutation addRunes {
    addRunes {
      _id
      username
      runes
    }
  }
`;

export const REMOVE_RUNES = gql`
  mutation removeRunes($_id: ID!, $runes: Int!) {
    removeRunes(_id: $_id, runes: $runes) {
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
  mutation addOrder($products: ID!) {
    addOrder(products: $products) {
      _id
      username
      runes
      orders {
        purchaseDate
        products {
          _id
        }
      }
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation removeProduct($id: ID!) {
    removeProduct(id: $id) {
      _id
      username
      cartCount
      runes
      savedCart {
        image
        name
        id
        description
        effect
        type
      }
    }
  }
`;
