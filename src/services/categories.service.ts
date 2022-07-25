import axios from "axios";
import useSWR from "swr";
import CATEGORIES from "../querys/categories";

export const categoriesService = () => {
  const query = CATEGORIES;
  const fetcher = (query: string) =>
    axios
      .post("http://localhost:5000/graphql", { query })
      .then((res) => res.data);

  const { data } = useSWR(query, fetcher);
  return data;
};
