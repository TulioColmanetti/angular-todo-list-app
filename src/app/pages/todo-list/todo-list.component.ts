import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  // providers: [TodoListService],
})
export class TodoListComponent implements OnInit {
  // taskList: Task[] = [];
  taskList$?: Observable<Task[]>;

  constructor(
    private todoListService: TodoListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.taskList$ = this.todoListService.getTasks();
    this.getTaskList();
    // this.todoListService.getTasks().subscribe((taskList: Task[]) => {
    //   this.taskList = taskList;
    // });
  }

  getTaskList() {
    this.taskList$ = this.todoListService.getTasks();
  }

  markAsDone(obj: { id: number; value: boolean }) {
    // const id = obj.id;
    // const value = obj.value;
    // this.taskList$[id].done = value;

    const sub = this.todoListService
      .updateTask(obj.id, { done: obj.value })
      .subscribe(() => {
        sub.unsubscribe();
      });
  }

  editTask(id: number) {
    this.router.navigate(['/update-task/' + id.toString()]);

    // const sub = this.todoListService.updateTask(id, {}).subscribe(() => {
    //   sub.unsubscribe();
    // });
  }

  deleteTask(id: number) {
    const sub = this.todoListService.deleteTask(id).subscribe(() => {
      this.getTaskList();
      sub.unsubscribe();
    });

    // this.taskList$ = this.taskList$?.pipe(
    //   map((items) => items.filter((item) => (!item.id ? item.id !== id : true)))
    // );
  }
}
