import { useLazyQuery } from "@apollo/client";
import { FormEvent } from "react";
import { Button } from "react-bootstrap";
import RANDOM_JOKE from "../../querys/randomJoke";


import { Loader } from "../LoaderView/Loader";
import { ShowJokes } from "../ShowJokeView/ShowJoke";
import { Container } from "./ButtonRandomJoke-styles";


export function ButtonRandomJoke() {
  const [getRandomJoke, { loading, data }] = useLazyQuery(RANDOM_JOKE);

  const handleClickButton = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return <Loader></Loader>;

    await getRandomJoke();
  };
  return (
    <>
      
      <Container>
        <form onSubmit={handleClickButton}>
          <Button type="submit" variant="secondary" size="lg">
            Random Joke
          </Button>
        </form>
      </Container>
      {data ? <ShowJokes jokes={[data.randomJoke]}></ShowJokes> : null}
    </>
  );
}
