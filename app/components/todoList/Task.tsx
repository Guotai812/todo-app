import { Button } from "@/components/ui/button";
import { TaskForm } from "@/app/schema//TaskFormSchema";
import { useTaskStore } from "../stores/useTaskStore";

export default function Task({
  openEditModel,
  openDeleteModel,
  task,
  id,
}: {
  openEditModel: () => void;
  openDeleteModel: () => void;
  task: TaskForm;
  id: string;
}) {
  const {setSelectedId} = useTaskStore();
  const buttonClickHandler = (showModel: () => void) => {
    showModel();
    setSelectedId(id);
  };
  return (
    <div className="flex justify-between shadow-sm min-h-12 items-center px-4 py-2 text-black hover:bg-gray-200">
      <p className="w-1/3  break-words whitespace-pre-wrap">{task.title}</p>
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
