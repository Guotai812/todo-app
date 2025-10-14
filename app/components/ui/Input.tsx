interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

export default function Input({ label, placeholder, ...props }: InputProps) {
  return (
    <div>
      <input placeholder={placeholder} {...props} />
    </div>
  );
}
