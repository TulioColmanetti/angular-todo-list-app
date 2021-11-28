import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { TaskPriority } from 'src/app/models/task.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  taskForm?: FormGroup;
  taskPriorities = [TaskPriority.Low, TaskPriority.Medium, TaskPriority.High];

  constructor(
    private todoListService: TodoListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      dueDate: new FormControl(null),
      priority: new FormControl(null),
      done: new FormControl(null),
    });
  }

  onSubmit() {
    const sub = this.todoListService
      .createTask({
        title: this.taskForm?.controls['title'].value,
        description: this.taskForm?.controls['description'].value,
        dueDate: this.taskForm?.controls['dueDate'].value,
        priority: this.taskForm?.controls['priority'].value,
        labels: [],
        done: this.taskForm?.controls['done'].value,
      })
      .subscribe(() => {
        this.router.navigate(['']);
        sub.unsubscribe();
      });
  }
}
