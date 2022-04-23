import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      runes
      orders {
        _id
        purchaseDate
        products {
          _id
        }
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query products {
    products {
      _id
      name
      description
      price
      image
      category {
        name
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query product($_id: ID!) {
    product(_id: $_id) {
      _id
      name
      description
      price
      image
    }
  }
`;
