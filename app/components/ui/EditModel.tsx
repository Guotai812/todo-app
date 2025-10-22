"use client";
import Model from "./Model";
import Form from "./Form";
import { useTaskStore } from "../stores/useTaskStore";

interface EditModelProps {
  hideModel: () => void;
}

export default function EditModel({ hideModel }: EditModelProps) {
  const { tasks, selectedId } = useTaskStore();
  const task = tasks.find((t) => t.id === selectedId);
  return (
    <Model title="Edit New Task" hideModel={hideModel}>
      <Form
        hideModel={hideModel}
        defaultValues={{
          title: task?.title ?? "",
          description: task?.description || "",
        }}
      />
    </Model>
  );
}
