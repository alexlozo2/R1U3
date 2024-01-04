import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { projects } from '../Models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  url = "http://localhost:8080";

  pro : projects[]=[];

  constructor(private http:HttpClient) { }

  getPro(): Observable<any> {
    return this.http.get<Array<any>>(this.url+'api/getProyectos.php');
  }

}
