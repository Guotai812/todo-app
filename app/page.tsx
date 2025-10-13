import AddButton from "./components/AddButton";
import Container from "./components/Container";
import Div from "./components/Div";
import Title from "./components/Title";

export default function Home() {
  return (
    <Container>
      <Div>
        <Title title="Welcome" />
        <AddButton />
      </Div>
    </Container>
  );
}
