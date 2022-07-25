import axios from "axios";
import useSWR from "swr";
import RANDOM_JOKE from "../querys/randomJoke";


export const randomJokeService = () => {
  const query = RANDOM_JOKE;
  const fetcher = (query: string) =>
    axios
      .post("http://localhost:5000/graphql", { query })
      .then((res) => res.data);

  const { data } = useSWR(query, fetcher);
  return data;
};
