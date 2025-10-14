import Div from "../ui/Div";
import Task from "./Task";
import TodoListContainer from "./TodoListContainer";
import TopBar from "./TopBar";

export default function TodoList() {
  return (
    <TodoListContainer>
      <TopBar />
      <Task />
      <Task />
      <Task />
    </TodoListContainer>
  );
}
