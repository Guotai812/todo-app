import AddButton from "./components/home/AddButton";
import Container from "./components/ui/Container";
import Div from "./components/ui/Div";
import Title from "./components/home/Title";
import TodoList from "./components/todoList/TodoList";

export default function Home() {
  return (
    <Container>
      <Div>
        <Title title="Welcome" />
        <AddButton />
        <TodoList />
      </Div>
    </Container>
  );
}
