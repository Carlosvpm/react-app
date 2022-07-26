import { useState } from "react";
import { Container, Left, Right, InputContainer, Input } from "./home-styles";
import CATEGORIES from "../../querys/categories";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { useJokeService } from "../../services/joke.service";
import { ShowResults } from "../../components/ShowJoke/ShowJoke";

const Home = () => {
  const [text, setText] = useState("");
  const title: string = "Chuck Norris Jokes";
  const description: string =
    'Chuck Norris Jokes é uma aplicação web que permite realizar buscas por qualquer piada do Chuck Norris, basta escrever algum tópico na barra de busca, ou então se preferir, pode buscar por categorias, caso não goste das opções podemos te surpreender com uma piada aleatória, basta clicar no botão "Random Joke"';
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
        <InputSearch
          parantCallBack={(text: string) => setText(text)}
        ></InputSearch>
        <ShowResults text={text}></ShowResults>
      </Right>
    </Container>
  );
};

export default Home;


