interface AddButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function AddButton(props: AddButtonProps) {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full"
      {...props}
    >
      Add Task to Todo List
    </button>
  );
}