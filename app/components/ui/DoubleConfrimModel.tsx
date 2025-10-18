import Model from "./Model";
import { Button } from "@/components/ui/button";
import { useTaskStore } from "../stores/useTaskStore";

export default function DoubleConfirmModel({
  hideModel,
  message,
  idx,
}: {
  hideModel: () => void;
  message: string;
  idx: number;
}) {
  const { removeTask } = useTaskStore();
  return (
    <Model title="WARNING" hideModel={hideModel}>
      <div className="text-black text-center">{message}</div>
      <div className="flex justify-end gap-2 mt-4">
        <Button variant={"default"} size={"sm"} onClick={hideModel}>
          Cancel
        </Button>
        <Button
          variant={"destructive"}
          size={"sm"}
          onClick={() => {
            removeTask(idx), hideModel();
          }}
        >
          Delete
        </Button>
      </div>
    </Model>
  );
}
