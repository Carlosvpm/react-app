import { gql } from '@apollo/client';
const RANDOM_JOKE = gql` 
  query {
    randomJoke{
      value
    }
  }
`;

export default RANDOM_JOKE;
