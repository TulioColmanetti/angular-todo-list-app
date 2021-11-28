import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TaskPriority } from 'src/app/models/task.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  taskForm?: FormGroup;
  taskPriorities = [TaskPriority.Low, TaskPriority.Medium, TaskPriority.High];
  taskId?: number;

  constructor(
    private todoListService: TodoListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.taskId = params['id'];

      if (this.taskId && this.taskId > 0) {
        this.todoListService.getTaskById(this.taskId).subscribe((task) => {
          this.taskForm = new FormGroup({
            title: new FormControl(task.title),
            description: new FormControl(task.description),
            dueDate: new FormControl(task.dueDate),
            priority: new FormControl(task.priority),
            done: new FormControl(task.done),
          });
        });
      }
    });
  }

  onSubmit() {
    if (this.taskId && this.taskId > 0) {
      const sub = this.todoListService
        .updateTask(this.taskId, {
          title: this.taskForm?.controls['title'].value,
          description: this.taskForm?.controls['description'].value,
          dueDate: this.taskForm?.controls['dueDate'].value,
          priority: this.taskForm?.controls['priority'].value,
          labels: [],
          done: this.taskForm?.controls['done'].value,
        })
        .subscribe(() => {
          this.router.navigate(['list-tasks']);
          sub.unsubscribe();
        });
    }
  }
}
