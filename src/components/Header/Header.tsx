import { Container, Left, Top } from "./styles";

type HeaderProps = {
  title: string;
  description: string;
};

export function Header(props: HeaderProps) {
  return (
    <Top>
      <Container>
        <Left>
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </Left>
      </Container>
    </Top>
  );
}
