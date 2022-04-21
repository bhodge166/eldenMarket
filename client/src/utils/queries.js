import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      cartCount
      runes
      savedCart {
        image
        title
        id
        description
        effect
        type
        price
      }
    }
  }
`;
