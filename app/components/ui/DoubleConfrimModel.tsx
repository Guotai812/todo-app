import Model from "./Model";
import { Button } from "@/components/ui/button";
import { useTaskStore } from "../stores/useTaskStore";
import { deleteTask, fetchAllTasks } from "@/app/services/task-service";

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
      await deleteTask(selectedId);
      const data = await fetchAllTasks();
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
