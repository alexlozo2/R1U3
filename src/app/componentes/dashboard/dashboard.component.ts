import { Documento } from './../../Models/Documento.model';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { InformeFactory } from './../../factory-pattern/informe-factory.interface';
import { Proyecto } from 'src/app/Models/Proyecto.model';
import { LiderConProyectos } from 'src/app/Models/liderConProyectos.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  documentos: Documento[];
  numPDFs: number;
  numPDFsPendientes: number;
  numPDFsEnRevision: number;
  documentosPendientes: Documento[];
  documentosEnRevision: Documento[];

  proyectos: Proyecto[];
  lideresConProyectos: LiderConProyectos[];
  numProyectos: number;
  numProyectosActivos: number;
  numProyectosCompletados: number;

  constructor(@Inject('InformeFactory') private informeFactory: InformeFactory, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.update();
    console.log("Pendientes",this.numPDFsPendientes);
    console.log("En revision",this.numPDFsEnRevision);
  }
  

  // Implementar el método update para refrescar la información
  update(): void {
    this.loadPDFs();
  }

  loadPDFs() {
    this.apiService.loadPDFs().subscribe(
      (documentos: Documento[]) => {
        this.documentos = documentos;
        this.documentosPendientes = documentos.filter(doc => doc.enRevision);
        this.documentosEnRevision = documentos.filter(doc => !doc.enRevision);

        this.numPDFs = documentos.length;
        this.numPDFsEnRevision = documentos.filter(p => !p.enRevision ).length;
        this.numPDFsPendientes = documentos.filter(p => p.enRevision ).length;
      },
      (error) => {
        console.error('Error al cargar proyectos:', error);
      }
    );
  }

  generarInforme(): void {
    const informe = this.informeFactory.crearInforme();
    informe.generarInforme();
  }

  loadProyectos() {
    this.apiService.loadProyectos().subscribe(
      (proyectos: Proyecto[]) => {
        this.proyectos = proyectos;
        this.numProyectos = proyectos.length;
        this.numProyectosActivos = proyectos.filter(p => p.estadoProyecto === 'Activo').length;
        this.numProyectosCompletados = proyectos.filter(p => p.estadoProyecto === 'Completado').length;
      },
      (error) => {
        console.error('Error al cargar proyectos:', error);
      }
    );
  }


  redirectToProyectoDetalle(proyecto: Proyecto) {
    if (proyecto && proyecto.idProyecto) {
      const url = ['ver-proyecto', proyecto.idProyecto];
      this.router.navigate(url);
    } else {
      console.error('ID de proyecto indefinido. No se puede navegar.');
    }
  }
  
  redirectToPDF(documento: Documento) {
    if (documento && documento.idDocumento) {
      const url = ['ver-proyecto', documento.idDocumento];
      this.router.navigate(url);
    } else {
      console.error('ID de proyecto indefinido. No se puede navegar.');
    }
  }

}


