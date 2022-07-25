import { gql } from "@apollo/client";
const RANDOM_FREE_TEXT = gql`
  {
    freeText(text: String) {
      value
    }
  }
`;

export default RANDOM_FREE_TEXT;
