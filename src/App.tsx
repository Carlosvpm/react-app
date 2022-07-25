import CATEGORIES from "./querys/categories";
import { JokeService } from "./services/joke.service";


function App() {
  const data = JokeService(CATEGORIES);
  return (

    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}

export default App;
