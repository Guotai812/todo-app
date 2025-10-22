import { z } from "zod";
const taskFormSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Task is required"),
  description: z.string().optional(),
});

export type TaskForm = z.infer<typeof taskFormSchema>;

export type Content = {
  title: string,
  description: string
}

