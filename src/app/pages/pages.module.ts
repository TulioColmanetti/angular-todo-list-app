import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { LoginComponent } from './login/login.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent, LoginComponent, CreateTaskComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TodoListComponent],
})
export class PagesModule {}
