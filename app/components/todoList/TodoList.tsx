"use client";
import useModel from "@/app/customHook/useModel";
import EditModel from "@/app/components/ui/EditModel";
import Task from "./Task";
import TodoListContainer from "./TodoListContainer";
import TopBar from "./TopBar";
import DoubleConfirmModel from "../ui/DoubleConfrimModel";
import { useTaskStore } from "../stores/useTaskStore";
import { useIdxStore } from "../stores/useIdxStore";
import { useModalStore } from "../stores/useModalStore";

export default function TodoList() {
  const { isOpen, show, hide } = useModalStore();
  const { tasks } = useTaskStore();
  const { idx } = useIdxStore();
  return (
    <TodoListContainer>
      <TopBar />
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No tasks available</p>
      ) : (
        tasks.map((task, idx) => (
          <li key={idx}>
            <Task
              idx={idx}
              task={task}
              openEditModel={() => show("edit")}
              openDeleteModel={() => show("double")}
            />
          </li>
        ))
      )}
      {isOpen("edit") && <EditModel hideModel={() => hide("edit")} />}
      {isOpen("double") && (
        <DoubleConfirmModel
          idx={idx}
          hideModel={() => hide("double")}
          message="Are you sure to delete it?"
        />
      )}
    </TodoListContainer>
  );
}
