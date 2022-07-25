import { Tweet } from "./components/Tweet";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import CATEGORIES from "./querys/categories";
import useSWR from "swr";
import axios from "axios";
import { categoriesService } from "./services/categories.service";

function App() {
  const data = categoriesService();
  return (
    /* O React não permite que tags de compontentes seguidas umas das outras não sejam encapsuladas com algo (<div></div> ou outra tag HTML) */
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}

export default App;
