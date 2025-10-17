"use client";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { Button } from "@/components/ui/button";
import { TaskForm } from "@/app/schema/TaskFormSchema";
import { Textarea } from "@/components/ui/textarea";
import { useTaskStore } from "../stores/useTaskStore";

interface FormProps {
  hideModel: () => void;
  defaultValues: TaskForm;
  idx?: number;
}

export default function Form({ hideModel, defaultValues, idx }: FormProps) {
  const { addTask, editTask } = useTaskStore();
  const { register, handleSubmit, watch, reset } = useForm<TaskForm>({
    defaultValues: defaultValues,
  });
  const taskValue = watch("task") ?? "";
  const description = watch("description") ?? "";
  const hasChanges =
    taskValue !== defaultValues.task ||
    (description || "") !== (defaultValues.description || "");

  const onSubmit = (data: TaskForm) => {
    if (idx === null || idx === undefined) {
      addTask(data);
    } else {
      editTask(idx, data);
    }
    reset();
    hideModel();
  };
  return (
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
          disabled={!taskValue.trim() || !hasChanges}
        >
          Confirm
        </Button>
      </div>
    </form>
  );
}
