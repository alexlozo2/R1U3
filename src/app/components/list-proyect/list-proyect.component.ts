import { Component, OnInit } from '@angular/core';

import { ProyectService } from 'src/app/servi/proyect.service';
import { projects } from 'src/app/Models/projects';

@Component({
  selector: 'app-list-proyect',
  templateUrl: './list-proyect.component.html',
  styleUrls: ['./list-proyect.component.css']
})
export class ListProyectComponent implements OnInit {


  constructor(private proyectS:ProyectService) { }
  lisP : projects[] = new Array<any>

  ngOnInit(): void {
    
    this.proyectS.getPro().subscribe(data=>{
      this.lisP=data;
    })

  }

}
