export enum TaskPriority {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
}

export interface Task {
  title: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  labels: string[];
  done: boolean;
}
