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

  public get(endpoint: string): Observable<any> {
    const url = `${this.url}/${endpoint}`;
    return this.http.get(url);
  }
  
}
