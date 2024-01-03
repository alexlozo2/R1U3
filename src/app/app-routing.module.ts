import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProyectComponent } from './components/list-proyect/list-proyect.component';
import { ActivityComponent } from './components/activity/activity.component';

const routes: Routes = [
 // {path: '',redirectTo:'imprimir', pathMatch: 'full'},
  {path: 'proyect',component:ListProyectComponent},
  {path:'actividad',component:ActivityComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
