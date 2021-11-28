import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { Task } from './../../../models/task.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input('taskObj') task?: Task;
  @Input() taskId?: number;
  @Output() warnTaskWasDone: EventEmitter<any> = new EventEmitter();
  @Output() warnEditTask: EventEmitter<any> = new EventEmitter();
  @Output() warnDeleteTask: EventEmitter<any> = new EventEmitter();
  @ViewChild('checkboxInput') checkboxInput?: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  getColor(): string {
    switch (this.task?.priority) {
      case 'LOW':
        return '#f5e769';
      case 'MEDIUM':
        return '#f5b869';
      case 'HIGH':
        return '#f56969';
      default:
        return 'white';
    }
  }

  getClass(): string {
    switch (this.task?.priority) {
      case 'LOW':
        return 'bg-yellow';
      case 'MEDIUM':
        return 'bg-orange';
      case 'HIGH':
        return 'bg-red';
      default:
        return '';
    }
  }

  markAsDone(event: any) {
    this.warnTaskWasDone.emit({ id: this.taskId, value: event.checked });
  }

  editTask() {
    this.warnEditTask.emit(this.taskId);
  }

  deleteTask() {
    this.warnDeleteTask.emit(this.taskId);
  }
}
