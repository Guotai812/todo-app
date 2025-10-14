export default function Task() {
  return (
    <div className="flex justify-between shadow-sm min-h-12 items-center px-4 py-2 text-black hover:bg-gray-300">
      <p className="w-1/2">go to gym </p>
      <div className="w-1/9 flex justify-between">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}
 