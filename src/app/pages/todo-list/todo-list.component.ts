import { Component, OnInit } from '@angular/core';
import { Task, TaskPriority } from 'src/app/models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  taskList: Task[] = [];

  constructor() {}

  ngOnInit(): void {
    this.taskList = [
      {
        title: 'Durmir',
        description: 'Lembrar de descansar',
        dueDate: new Date(),
        priority: TaskPriority.Low,
        labels: [],
      },
      {
        title: 'Todo List App',
        description: 'Fazer projeto Todo List App',
        dueDate: new Date(),
        priority: TaskPriority.High,
        labels: [],
      },
    ];
  }
}
