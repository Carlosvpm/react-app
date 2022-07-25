import axios from "axios";
import useSWR from "swr";
import RANDOM_JOKE_CATEGORY from "../querys/randomJokeForCategory";

export const randomJokeForCategoryService = () => {
  const query = RANDOM_JOKE_CATEGORY;
  const fetcher = (query: string) =>
    axios
      .post("http://localhost:5000/graphql", { query })
      .then((res) => res.data);

  const { data } = useSWR(query, fetcher);
  return data;
};
