import { gql } from '@apollo/client';
import { request } from "graphql-request";
import useSWR from "swr";


export const useJokeService = (query: any, variables: {}) => {
  const fetcher = (query: string) =>
    request("http://localhost:5000/graphql", query, variables);


  const { data } = useSWR(query, fetcher);
  return data;
};
