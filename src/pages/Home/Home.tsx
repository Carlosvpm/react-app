import { Left, Right } from "./home-styles";
import { InputSearch } from "../../components/InputSearchForm/InputSearchForm";
import { Container } from "../../styles/global-styles";
import { ManuCategories } from "../../components/MenuCategoriesView/MenuCategories";
import { ButtonRandomJoke } from "../../components/ButtonRandomJoke/ButtonRandomJoke";
import { useState } from "react";
import { ShowJokes } from "../../components/ShowJokeView/ShowJoke";

function Home() {
  const title: string = "Chuck Norris Jokes";
  const description: string =
    'Chuck Norris Jokes é uma aplicação web que permite realizar buscas por qualquer piada do Chuck Norris, basta escrever algum tópico na barra de busca, ou então se preferir, pode buscar por categorias, caso não goste das opções podemos te surpreender com uma piada aleatória, basta clicar no botão "Random Joke"';
  const [jokes, setJokes] = useState();

  const parseForShowJoke = (inputData: any) => {
    return inputData;
  };
  return (
    <Container>
      <Left>
        <h1>{title}</h1>
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            margin: "3rem",
          }}
        >
          <h3>{description}</h3>
        </div>
      </Left>
      <Right>
        <InputSearch onSubmit={parseForShowJoke('')}></InputSearch>
        <ButtonRandomJoke></ButtonRandomJoke>
        <ShowJokes ></ShowJokes>
      </Right>
    </Container>
  );
}

export default Home;
