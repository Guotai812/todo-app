export default function Button({
  kind,
  children,
}: {
  kind: "edit" | "delete" | "confirm" | "cancel";
  children?: React.ReactNode;
}) {
  const base =
    "rounded text-black transition-colors duration-200 px-2 py-1 text-sm font-medium";

  const styles = {
    edit: "bg-blue-500 hover:text-white",
    delete: "bg-red-500 hover:text-white",
    confirm: "bg-green-500 hover:text-white",
    cancel: "bg-gray-400 hover:text-white",
  };
  return <button className={`${base} ${styles[`${kind}`]}`}>{children}</button>;
}
