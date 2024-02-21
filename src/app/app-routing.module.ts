import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { dauthGuard } from './guards/dauth.guard';
import { TodoComponent } from './standalone/todo/todo.component';

const routes: Routes = [
  {
    path: 'admin',
    // используем guard чтобы не впускать и не выпускать кого и когда попало
    canActivate: [authGuard],
    canDeactivate: [dauthGuard],
    // подгрузка по запросу, то есть пока не пройдем по ссылке, не прогрузит
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'standalone-component', component: TodoComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
