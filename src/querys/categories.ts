import { gql } from "@apollo/client";

const CATEGORIES = gql`
  query {
    categories
  }
`;

export default CATEGORIES;
