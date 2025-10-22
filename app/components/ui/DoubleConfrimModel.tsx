import Model from "./Model";
import { Button } from "@/components/ui/button";
import { useTaskStore } from "../stores/useTaskStore";

export default function DoubleConfirmModel({
  hideModel,
  message,
}: {
  hideModel: () => void;
  message: string;
}) {
  const { selectedId, setTask, resetSelectedId } = useTaskStore();
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5299/api/tasks/${selectedId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete task");

      const response = await fetch("http://localhost:5299/api/tasks");
      if (!response.ok) throw new Error("Failed to fetch tasks after delete");
      const data = await response.json();
      resetSelectedId();
      setTask(data);
      hideModel();
    } catch (err) {
      console.error("Error deleting task:", err);
      alert("Failed to delete task.");
    }
  };

  return (
    <Model title="WARNING" hideModel={hideModel}>
      <div className="text-black text-center">{message}</div>
      <div className="flex justify-end gap-2 mt-4">
        <Button variant={"default"} size={"sm"} onClick={hideModel}>
          Cancel
        </Button>
        <Button variant={"destructive"} size={"sm"} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Model>
  );
}
