import { Card } from "react-bootstrap";
import { Container } from "../../pages/Home/home-styles";

type ShowJokeProps = {
  jokes: { __typename: string; value: string }[];
};

export const ShowJokes = (props: ShowJokeProps) => {
  if (!props.jokes) return null;

  return (
    <Container>
      {props.jokes.map((jokes: any, index: number) => {
        return (
          <Card
            bg="dark"
            key={index}
            text="white"
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>Chuck Norris joke</Card.Title>
              <Card.Text>{jokes.value}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};
