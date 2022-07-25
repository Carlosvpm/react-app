import { gql } from "@apollo/client";

const RANDOM_JOKE_CATEGORY = gql`
  query {
    randomJokeForCategory(category: String!) {
      value
    }
  }
`;

export default RANDOM_JOKE_CATEGORY;
