import { Button } from "@/components/ui/button";
import { TaskForm } from "@/app/schema//TaskFormSchema";
import { useIdxStore } from "../stores/useIdxStore";

export default function Task({
  openEditModel,
  openDeleteModel,
  task,
  idx,
}: {
  openEditModel: () => void;
  openDeleteModel: () => void;
  task: TaskForm;
  idx: number;
}) {
  const { setIdx } = useIdxStore();
  const buttonClickHandler = (showModel: () => void) => {
    showModel();
    setIdx(idx);
  };
  return (
    <div className="flex justify-between shadow-sm min-h-12 items-center px-4 py-2 text-black hover:bg-gray-200">
      <p className="w-1/3  break-words whitespace-pre-wrap">{task.task}</p>
      <p className="w-1/3  break-words whitespace-pre-wrap">
        {task.description}
      </p>
      <div className="w-1/6 flex justify-between">
        <Button
          variant="link"
          size={"sm"}
          onClick={() => buttonClickHandler(openEditModel)}
        >
          Edit
        </Button>
        <Button
          variant={"destructive"}
          size={"sm"}
          onClick={() => buttonClickHandler(openDeleteModel)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
