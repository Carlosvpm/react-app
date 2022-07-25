import axios from "axios";
import useSWR from "swr";
import CATEGORIES from "../querys/categories";

export const JokeService = (query: string) => {
  const fetcher = (query: string) =>
    axios
      .post("http://localhost:5000/graphql", { query })
      .then((res) => res.data);

  const { data } = useSWR(query, fetcher);
  return data;
};
