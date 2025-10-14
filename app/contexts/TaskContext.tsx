"use client";
import { createContext, useState, useContext } from "react";

interface TaskContextType {
  tasks: string[];
  editTask: (taskIdx: number, newTask: string) => void;
  addTask: (task: string) => void;
  removeTask: (taskIdx: number) => void;
}

const taskContext = createContext<TaskContextType | null>(null);

export function TaskContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<string[]>([]);
  const editTask = (taskIdx: number, newTask: string) => {
    const newTasks = [...tasks];
    newTasks[taskIdx] = newTask;
    setTasks(newTasks);
  };
  const addTask = (task: string) => {
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
