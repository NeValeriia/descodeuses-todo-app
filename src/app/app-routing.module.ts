import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './auth.guard';

/* path : lien saisi dans la barre de navigation
component: le composant relie a ce  path */
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'signuppage', component: SignuppageComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'todo-detail/:id', component: TodoDetailComponent },
  { path: 'todo-table', component: TodoTableComponent },
  { path: '', component: DashboardComponent ,canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
