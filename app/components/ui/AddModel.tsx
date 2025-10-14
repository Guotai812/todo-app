import { use, useState } from "react";
import Model from "./Model";
import Input from "./Input";
import Button from "./Button";
import useTaskContext from "@/app/contexts/TaskContext";

interface AddModelProps {
  hideModel: () => void;
}

export default function AddModel({ hideModel }: AddModelProps) {
  const [taskContent, setTaskContent] = useState<string>("");
  const { addTask } = useTaskContext();
  return (
    <Model title="Add New Task" hideModel={hideModel}>
      <Input
        type="text"
        className="border-1 w-full text-black px-2"
        placeholder="Enter your task"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
      />
      <div className="flex justify-end gap-2 mt-4">
        <Button kind="cancel" onClick={hideModel}>
          Cancel
        </Button>
        <Button
          kind="confirm"
          onClick={() => {
            addTask(taskContent), hideModel();
          }}
          disabled={!taskContent.trim()}
        >
          Confirm
        </Button>
      </div>
    </Model>
  );
}
