import { useForm } from "react-hook-form";
import Model from "./Model";
import Input from "./Input";
import { Button } from "@/components/ui/button";
import useTaskContext from "@/app/contexts/TaskContext";
import { TaskForm } from "@/app/schema/TaskFormSchema";
import useIdxContext from "@/app/contexts/TaskIdxContext";
import { Textarea } from "@/components/ui/textarea";

interface EditModelProps {
  hideModel: () => void;
}

export default function EditModel({ hideModel }: EditModelProps) {
  const { tasks, editTask } = useTaskContext();
  const { idx } = useIdxContext();
  const { register, handleSubmit, watch, reset } = useForm<TaskForm>({
    defaultValues: {
      task: tasks[idx].task,
      description: tasks[idx].description || "",
    },
  });
  const taskValue = watch("task") ?? "";
  const descriptionValue = watch("description") ?? "";

  const hasTaskChanged =
    taskValue.trim() !== tasks[idx].task ||
    (descriptionValue || "").trim() !== (tasks[idx].description || "").trim();

  const onSubmit = (data: TaskForm) => {
    editTask(idx, data);
    reset();
    hideModel();
  };

  return (
    <Model title="Edit New Task" hideModel={hideModel}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register("task")}
          className="border w-full text-black px-2 py-2"
          placeholder="Enter your task"
        />

        <Textarea
          {...register("description")}
          placeholder="Enter description (optional)"
          wrap="soft"
          rows={6}
        />

        <div className="flex justify-end gap-2 mt-4">
          <Button type="button" variant="default" size="sm" onClick={hideModel}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="outline"
            size="sm"
            disabled={!hasTaskChanged}
          >
            Confirm
          </Button>
        </div>
      </form>
    </Model>
  );
}
