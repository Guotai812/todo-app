"use client";
import { useEffect } from "react";
import EditModel from "@/app/components/ui/EditModel";
import Task from "./Task";
import TodoListContainer from "./TodoListContainer";
import TopBar from "./TopBar";
import DoubleConfirmModel from "../ui/DoubleConfrimModel";
import { useTaskStore } from "../stores/useTaskStore";
import { useModalStore } from "../stores/useModalStore";
import { fetchAllTasks } from "@/app/services/task-service";

export default function TodoList() {
  const { isOpen, show, hide } = useModalStore();
  const { tasks, setTask, reset } = useTaskStore();
  async function fetchTasks() {
    try {
      const data = await fetchAllTasks();
      reset();
      setTask(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);
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
