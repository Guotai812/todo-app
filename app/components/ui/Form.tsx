"use client";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTaskStore } from "../stores/useTaskStore";
import { useModalStore } from "../stores/useModalStore";
import { TaskForm } from "@/app/schema/TaskFormSchema";
import { addTask, editTask, fetchAllTasks } from "@/app/services/task-service";

interface FormProps {
  hideModel: () => void;
  defaultValues: TaskForm;
}

export default function Form({ hideModel, defaultValues }: FormProps) {
  const { hide } = useModalStore();
  const { setTask, selectedId, resetSelectedId } = useTaskStore();
  const { register, handleSubmit, watch, reset } = useForm<TaskForm>({
    defaultValues: defaultValues,
  });
  const taskValue = watch("title") ?? "";
  const description = watch("description") ?? "";
  const hasChanges =
    taskValue !== defaultValues.title ||
    (description || "") !== (defaultValues.description || "");

  let onSubmit;
  if (selectedId.trim() === "") {
    onSubmit = async (data: TaskForm) => {
      try {
        await addTask(data);
        const tasks = await fetchAllTasks();
        reset();
        resetSelectedId();
        setTask(tasks);
        hide("add");
      } catch (error) {
        console.error("Error adding task:", error);
        hide("add");
      }
    };
  } else {
    onSubmit = async (data: TaskForm) => {
      try {
        await editTask(selectedId, data);
        const tasks = await fetchAllTasks();
        reset();
        resetSelectedId();
        setTask(tasks);
        hide("edit");
      } catch (error) {
        console.error("Error adding task:", error);
        hide("edit");
      }
    };
  }
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        {...register("title")}
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
