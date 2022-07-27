import { useState } from "react";
import { Container, Left, Right, InputContainer, Input } from "./home-styles";
import CATEGORIES from "../../querys/categories";
import { InputSearch } from "../../components/InputSearchForm/InputSearchForm";
import { useQuery } from "@apollo/client";
import { Loader } from "../../components/Loader/Loader";

function Home() {
  const [text, setText] = useState("");
  const title: string = "Chuck Norris Jokes";
  const description: string =
    'Chuck Norris Jokes é uma aplicação web que permite realizar buscas por qualquer piada do Chuck Norris, basta escrever algum tópico na barra de busca, ou então se preferir, pode buscar por categorias, caso não goste das opções podemos te surpreender com uma piada aleatória, basta clicar no botão "Random Joke"';

  const { data, loading } = useQuery(CATEGORIES);
  if (loading) {
    return <Loader></Loader>;
  }
  console.log(data);

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
        <InputSearch></InputSearch>
        <ul></ul>
      </Right>
    </Container>
  );
}

export default Home;
