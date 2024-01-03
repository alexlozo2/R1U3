import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { VerProyectoComponent } from './componentes/ver-proyecto/ver-proyecto.component';
import { InformePDFFactory } from './factory-pattern/informe-pdf.factory';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { ImprimirComponent } from './componentes/imprimir/imprimir.component';
import { DashboardSingletonComponent } from './componentes/dashboard-singleton/dashboard-singleton.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProyectComponent } from './components/list-proyect/list-proyect.component';
import { ActivityComponent } from './components/activity/activity.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    VerProyectoComponent,
    IniciarSesionComponent,
    ImprimirComponent,
    DashboardSingletonComponent,
    NavbarComponent,
    ListProyectComponent,
    ActivityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: 'InformeFactory', useClass: InformePDFFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }
