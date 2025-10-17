'use client';

import { create } from 'zustand';
import { TaskForm } from '@/app/schema/TaskFormSchema';

type TaskState = {
  tasks: TaskForm[];
  addTask: (task: TaskForm) => void;
  editTask: (taskIdx: number, newTask: TaskForm) => void;
  removeTask: (taskIdx: number) => void;
  reset: () => void;
};

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),

  editTask: (taskIdx, newTask) =>
    set((state) => {
      if (taskIdx < 0 || taskIdx >= state.tasks.length) return state;
      const next = state.tasks.slice();
      next[taskIdx] = newTask;
      return { tasks: next };
    }),

  removeTask: (taskIdx) =>
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== taskIdx),
    })),

  reset: () => set({ tasks: [] }),
}));