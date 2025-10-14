import { Button } from "@/components/ui/button";

type AddButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AddButton(props: AddButtonProps) {
  return (
    <Button variant={"default"} {...props} className="w-full">
      Add Task to Todo List
    </Button>
  );
}
