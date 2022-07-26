import { gql } from "@apollo/client";
const RANDOM_FREE_TEXT = gql`
  query getFreeTextJoke($text: String!){
    freeText(text: $text) {
      result{
        value
      }
    }
  }
`;

export default RANDOM_FREE_TEXT;
