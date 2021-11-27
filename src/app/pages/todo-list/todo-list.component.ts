import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.taskList$ = this.todoListService.getTasks();
    // this.todoListService.getTasks().subscribe((taskList: Task[]) => {
    //   this.taskList = taskList;
    // });
  }

  markAsDone(obj: { id: number; value: boolean }) {
    const id = obj.id;
    const value = obj.value;

    // this.taskList$[id].done = value;
  }
}
