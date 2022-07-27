import { environmets } from "./../environments/environments";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: environmets.URLgraphql,
  cache: new InMemoryCache(),
});
