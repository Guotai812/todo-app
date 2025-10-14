"use client";
import AddButton from "./components/home/AddButton";
import Container from "./components/ui/Container";
import Div from "./components/ui/Div";
import Title from "./components/home/Title";
import TodoList from "./components/todoList/TodoList";
import useModel from "./customHook/useModel";
import AddModel from "./components/ui/AddModel";
import { IdxContextProvider } from "./contexts/TaskIdxContext";

export default function Home() {
  const { isShow, showModel, hideModel } = useModel();
  return (
    <>
      {isShow && <AddModel hideModel={hideModel} />}
      <Container>
        <Div>
          <Title title="Welcome" />
          <AddButton onClick={showModel} />
          <IdxContextProvider>
            <TodoList />
          </IdxContextProvider>
        </Div>
      </Container>
    </>
  );
}
