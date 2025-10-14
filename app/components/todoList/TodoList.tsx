"use client";
import useModel from "@/app/customHook/useModel";
import EditModel from "@/app/components/ui/EditModel";
import Task from "./Task";
import TodoListContainer from "./TodoListContainer";
import TopBar from "./TopBar";
import useTaskContext from "@/app/contexts/TaskContext";
import useIdxContext from "@/app/contexts/TaskIdxContext";
import DoubleConfirmModel from "../ui/DoubleConfrimModel";

export default function TodoList() {
  const {
    isShow: editModel,
    showModel: showEdit,
    hideModel: hidEdit,
  } = useModel();
  const {
    isShow: deleteModel,
    showModel: showDelete,
    hideModel: hidDelete,
  } = useModel();
  const { tasks } = useTaskContext();
  const { idx } = useIdxContext();
  return (
    <TodoListContainer>
      <TopBar />
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No tasks available</p>
      ) : (
        tasks.map((task, idx) => (
          <li key={idx}>
            <Task
              idx={idx}
              task={task}
              openEditModel={showEdit}
              openDeleteModel={showDelete}
            />
          </li>
        ))
      )}
      {editModel && <EditModel idx={idx} hideModel={hidEdit} />}
      {deleteModel && (
        <DoubleConfirmModel
          idx={idx}
          hideModel={hidDelete}
          message="Are you sure to delete it?"
        />
      )}
    </TodoListContainer>
  );
}
