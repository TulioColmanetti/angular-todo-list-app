enum TaskPriority {
  Low,
  Medium,
  High,
}

export interface Task {
  title: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  labels: string[];
}
