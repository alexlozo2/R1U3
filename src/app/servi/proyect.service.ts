import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  url = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  //getProyect():Observable<any>{}
}
