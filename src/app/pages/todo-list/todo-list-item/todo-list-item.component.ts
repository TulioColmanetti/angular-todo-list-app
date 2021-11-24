import { Component, Input, OnInit } from '@angular/core';

import { Task } from './../../../models/task.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input('taskObj') task?: Task;

  constructor() {}

  ngOnInit(): void {}
}
