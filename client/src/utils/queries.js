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
        name
        id
        description
        effect
        type
      }
    }
  }
`;
