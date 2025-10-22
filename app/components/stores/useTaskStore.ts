"use client";

import { create } from "zustand";
import { TaskForm } from "@/app/schema/TaskFormSchema";

type TaskState = {
  selectedId: string;
  tasks: TaskForm[];
  setTask: (tasks: TaskForm[]) => void;
  setSelectedId: (taskId: string) => void;
  reset: () => void;
  resetSelectedId: () => void;
};

export const useTaskStore = create<TaskState>((set) => ({
  selectedId: "",
  tasks: [],
  setTask: (tasks) => set({ tasks }),
  setSelectedId: (taskId) => set({ selectedId: taskId }),
  reset: () => set({ tasks: [] }),
  resetSelectedId: () => set({ selectedId: "" }),
}));
