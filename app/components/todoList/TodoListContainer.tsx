export default function TodoListContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full border-2 rounded border-gray-300 p-4 flex flex-col gap-2">
      {children}
    </div>
  );
}
