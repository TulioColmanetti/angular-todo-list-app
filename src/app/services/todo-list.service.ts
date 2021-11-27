import { Injectable } from '@angular/core';
import { TaskPriority } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor() {}

  getTasks() {
    return [
      {
        title: 'Durmir',
        description: 'Lembrar de descansar',
        dueDate: new Date(),
        priority: TaskPriority.Low,
        labels: [],
        done: false,
      },
      {
        title: 'Todo List App',
        description: 'Fazer projeto Todo List App',
        dueDate: new Date(),
        priority: TaskPriority.High,
        labels: [],
        done: false,
      },
    ];
  }
}
