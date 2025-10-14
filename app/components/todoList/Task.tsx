import useTaskContext from "@/app/contexts/TaskContext";
import Button from "../ui/Button";
import { useId } from "react";
import useIdxContext from "@/app/contexts/TaskIdxContext";

export default function Task({
  openEditModel,
  openDeleteModel,
  task,
  idx,
}: {
  openEditModel: () => void;
  openDeleteModel: () => void;
  task: string;
  idx: number;
}) {
  const { setIdx } = useIdxContext();
  const buttonClickHandler = (showModel: () => void) => {
    showModel();
    setIdx(idx);
  };
  return (
    <div className="flex justify-between shadow-sm min-h-12 items-center px-4 py-2 text-black hover:bg-gray-200">
      <p className="w-1/2">{task}</p>
      <div className="w-1/7 flex justify-between">
        <Button kind="edit" onClick={() => buttonClickHandler(openEditModel)}>
          Edit
        </Button>
        <Button
          kind="delete"
          onClick={() => buttonClickHandler(openDeleteModel)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
