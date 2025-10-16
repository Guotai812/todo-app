import { z } from "zod";
const taskFormSchema = z.object({
  task: z.string().min(1, "Task is required"),
  description: z.string().optional(),
});

export type TaskForm = z.infer<typeof taskFormSchema>;
