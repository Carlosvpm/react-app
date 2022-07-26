import RANDOM_FREE_TEXT from "../../querys/JokeForFreeText";
import { useJokeService } from "../../services/joke.service";

type ShowJokeProps = {
  text: string;
};

export const ShowResults = (props: ShowJokeProps) => {
  const result = useJokeService(RANDOM_FREE_TEXT, { text: props.text });

  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};
