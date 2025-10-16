"use client";
import { createContext, useState, useContext } from "react";
import { TaskForm } from "@/app/schema/TaskFormSchema";

interface TaskContextType {
  tasks: TaskForm[];
  editTask: (taskIdx: number, newTask: TaskForm) => void;
  addTask: (task: TaskForm) => void;
  removeTask: (taskIdx: number) => void;
}

const taskContext = createContext<TaskContextType | null>(null);

export function TaskContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<TaskForm[]>([]);
  const editTask = (taskIdx: number, newTask: TaskForm) => {
    const newTasks = [...tasks];
    newTasks[taskIdx] = newTask;
    setTasks(newTasks);
  };
  const addTask = (task: TaskForm) => {
    setTasks([...tasks, task]);
  };
  const removeTask = (taskIdx: number) => {
    const newTasks = tasks.filter((_, idx) => idx !== taskIdx);
    setTasks(newTasks);
  };
  return (
    <taskContext.Provider value={{ tasks, editTask, addTask, removeTask }}>
      {children}
    </taskContext.Provider>
  );
}

export default function useTaskContext() {
  const context = useContext(taskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskContextProvider");
  }
  return context;
}
