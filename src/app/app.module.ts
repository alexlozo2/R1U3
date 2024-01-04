import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { InformePDFFactory } from './factory-pattern/informe-pdf.factory';


import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProyectComponent } from './components/list-proyect/list-proyect.component';
import { ActivityComponent } from './components/activity/activity.component';



@NgModule({
  declarations: [
    AppComponent,
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
