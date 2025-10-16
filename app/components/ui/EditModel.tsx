"use client";
import Model from "./Model";
import useTaskContext from "@/app/contexts/TaskContext";
import useIdxContext from "@/app/contexts/TaskIdxContext";
import Form from "./Form";

interface EditModelProps {
  hideModel: () => void;
}

export default function EditModel({ hideModel }: EditModelProps) {
  const { tasks } = useTaskContext();
  const { idx } = useIdxContext();

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
