"use client";
import AddButton from "./components/home/AddButton";
import Container from "./components/ui/Container";
import Div from "./components/ui/Div";
import Title from "./components/home/Title";
import TodoList from "./components/todoList/TodoList";
import AddModel from "./components/ui/AddModel";
import { useModalStore } from "./components/stores/useModalStore";

export default function Home() {
  const { isOpen, show, hide } = useModalStore();
  return (
    <>
      {isOpen("add") && <AddModel hideModel={() => hide("add")} />}
      <Container>
        <Div>
          <Title title="Welcome" />
          <AddButton onClick={() => show("add")} />
          <TodoList />
        </Div>
      </Container>
    </>
  );
}
