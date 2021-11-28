import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: TodoListComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'create-task',
    canActivate: [AuthGuard],
    component: CreateTaskComponent,
  },
  {
    path: 'update-task',
    canActivate: [AuthGuard],
    component: UpdateTaskComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
