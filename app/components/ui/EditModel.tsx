"use client";
import Model from "./Model";
import Form from "./Form";
import { useIdxStore } from "../stores/useIdxStore";
import { useTaskStore } from "../stores/useTaskStore";

interface EditModelProps {
  hideModel: () => void;
}

export default function EditModel({ hideModel }: EditModelProps) {
  const { tasks } = useTaskStore();
  const { idx } = useIdxStore();

  return (
    <Model title="Edit New Task" hideModel={hideModel}>
      <Form
        hideModel={hideModel}
        defaultValues={{
          task: tasks[idx].task,
          description: tasks[idx].description || "",
        }}
        idx={idx}
      />
    </Model>
  );
}
