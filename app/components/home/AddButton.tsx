type AddButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AddButton(props: AddButtonProps) {
  return <button {...props} />;
}