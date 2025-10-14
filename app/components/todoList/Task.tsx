import Button from "../ui/Button";

export default function Task() {
  return (
    <div className="flex justify-between shadow-sm min-h-12 items-center px-4 py-2 text-black hover:bg-gray-300">
      <p className="w-1/2">go to gym </p>
      <div className="w-1/7 flex justify-between">
        <Button kind="confirm">Edit</Button>
        <Button kind="delete">Delete</Button>
      </div>
    </div>
  );
}
