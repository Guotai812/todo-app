const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import { TaskForm } from "../schema/TaskFormSchema";

export async function fetchAllTasks() {
  const response = await fetch(`${BASE_URL}/tasks`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const data = await response.json();
  return data;
}

export async function addTask(data: TaskForm) {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to add task");
  }
}

export async function editTask(selectedId: string, data: TaskForm) {
  const response = await fetch(`${BASE_URL}/tasks/${selectedId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to add task");
  }
}

export async function deleteTask(selectedId: string) {
  const res = await fetch(`${BASE_URL}/tasks/${selectedId}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete task");
}
