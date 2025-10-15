import { useState } from "react";
import Model from "./Model";
import Input from "./Input";
import { Button } from "@/components/ui/button";
import useTaskContext from "@/app/contexts/TaskContext";

interface EditModelProps {
  hideModel: () => void;
  idx: number;
}

export default function EditModel({ idx, hideModel }: EditModelProps) {
  const { tasks, editTask } = useTaskContext();
  const [taskContent, setTaskContent] = useState<string>(tasks[idx]);
  return (
    <Model title="Edit Task" hideModel={hideModel}>
      <Input
        type="text"
        className="border-1 w-full text-black px-2"
        placeholder="Enter your task"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
      />
      <div className="flex justify-end gap-2 mt-4">
        <Button variant={"default"} size={"sm"} onClick={hideModel}>
          Cancel
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={() => {
            editTask(idx, taskContent), hideModel();
          }}
          disabled={
            taskContent.trim() === tasks[idx].trim() ||
            taskContent.trim() === ""
          }
        >
          Confirm
        </Button>
      </div>
    </Model>
  );
}
