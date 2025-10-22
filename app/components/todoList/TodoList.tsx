"use client";
import { useEffect } from "react";
import EditModel from "@/app/components/ui/EditModel";
import Task from "./Task";
import TodoListContainer from "./TodoListContainer";
import TopBar from "./TopBar";
import DoubleConfirmModel from "../ui/DoubleConfrimModel";
import { useTaskStore } from "../stores/useTaskStore";
import { useModalStore } from "../stores/useModalStore";

export default function TodoList() {
  const { isOpen, show, hide } = useModalStore();
  const { tasks, setTask, reset } = useTaskStore();
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5299/api/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();

      reset();
      setTask(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, [setTask, reset]);
  return (
    <TodoListContainer>
      <TopBar />
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <li key={task.id}>
            <Task
              id={task.id}
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
          hideModel={() => hide("double")}
          message="Are you sure to delete it?"
        />
      )}
    </TodoListContainer>
  );
}
