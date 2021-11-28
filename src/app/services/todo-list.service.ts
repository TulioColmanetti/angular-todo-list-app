import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Task, TaskPriority } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

// const URL = 'http://madsti.com.br:9099/todos';
// const options = {
//   headers: {
//     Authorization: 'Basic ' + btoa('admin:password'),
//   },
// };

const URL = 'http://localhost:3001/tasks';
const options = {};

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(URL, options);

    // return of([
    //   {
    //     title: 'Durmir',
    //     description: 'Lembrar de descansar',
    //     dueDate: new Date(),
    //     priority: TaskPriority.Low,
    //     labels: [],
    //     done: false,
    //   },
    //   {
    //     title: 'Todo List App',
    //     description: 'Fazer projeto Todo List App',
    //     dueDate: new Date(),
    //     priority: TaskPriority.High,
    //     labels: [],
    //     done: false,
    //   },
    // ]).pipe(delay(2000));
  }

  createTask(task: Task) {
    return this.http.post<Task>(URL, task);
  }

  updateTask(id: number, taskData: Object) {
    return this.http.patch<Task>(URL + '/' + id.toString(), taskData);
  }

  deleteTask(id: number) {
    return this.http.delete(URL + '/' + id.toString());
  }
}
