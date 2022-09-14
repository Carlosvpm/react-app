import { useQuery } from "@apollo/client";
import { Button, ButtonGroup } from "react-bootstrap";
import CATEGORIES from "../../querys/categories";
import { Container } from "./menuCategories-styles";

export function ManuCategories() {
  const { data, loading } = useQuery(CATEGORIES);
  if (loading) return null;
  return (
    <Container>
      {data.categories.map((value: string, index: number) => {
        return (
          <ButtonGroup>
            <Button variant="secondary" key={index.toString()}>
              {value}
            </Button>
          </ButtonGroup>
        );
      })}
    </Container>
  );
}
