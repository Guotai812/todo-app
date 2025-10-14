interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind: "edit" | "delete" | "confirm" | "cancel";
  disabled?: boolean;
}

export default function Button({
  kind,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "rounded text-black transition-colors duration-200 px-2 py-1 text-sm font-medium text-white";

  const styles = {
    edit: "bg-blue-600 hover:bg-blue-500",
    delete: "bg-red-600 hover:bg-red-500",
    confirm: "bg-green-600 hover:bg-green-500",
    cancel: "bg-gray-500 hover:bg-gray-400",
  };

  const disabledStyle = "opacity-50 cursor-not-allowed pointer-events-none hover:bg-none";

  return (
    <button
      className={`${base} ${styles[kind]} ${disabled ? disabledStyle : ""}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
