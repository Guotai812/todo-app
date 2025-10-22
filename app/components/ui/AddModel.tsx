"use client";
import Model from "./Model";
import Form from "./Form";

interface AddModelProps {
  hideModel: () => void;
}

export default function AddModel({ hideModel }: AddModelProps) {
  return (
    <Model title="Add New Task" hideModel={hideModel}>
      <Form
        hideModel={hideModel}
        defaultValues={{ title: "", description: "" }}
      />
    </Model>
  );
}
