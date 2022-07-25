import { useEffect, useState } from "react";
import { Container, Left, Right, InputContainer, Input } from "./home-styles";
import { FiChevronLeft, FiChevronRight, FiSend } from "react-icons/fi";
import { JokeService } from "../../services/joke.service";
import RANDOM_FREE_TEXT from "../../querys/JokeForFreeText";

const Home = () => {
  const [text, setText] = useState("");

  const [joke, setJoke] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefaut();
    
    setJoke(JokeService(RANDOM_FREE_TEXT, { text }))
    console.log("Joke:", joke)
  };

 
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
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <InputContainer>
            <Input
              placeholder="Search"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
                onSubmit={handleSubmit}
              type="submit"
              style={{ cursor: "pointer" }}
            >
              <FiSend size={22} color="#fff" />
              Search
            </button>
          </InputContainer>
        </form>

        <div>
          <h1>{text}</h1>
        </div>
      </Right>
    </Container>
  );
};

export default Home;
