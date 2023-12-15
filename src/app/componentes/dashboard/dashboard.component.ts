import { Documento } from './../../Models/Documento.model';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { InformeFactory } from './../../factory-pattern/informe-factory.interface';

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
  documentosAceptados: Documento[];
  documentosRechazados: Documento[];

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
        this.documentosPendientes = documentos.filter(doc => doc.Estado === 'Pendiente');
        this.documentosEnRevision = documentos.filter(doc => doc.Estado === 'EnRevision');
        this.documentosAceptados = documentos.filter(doc => doc.Estado === 'Aceptado');
        this.documentosRechazados = documentos.filter(doc => doc.Estado === 'Rechazado');

        this.numPDFs = documentos.length;
        this.numPDFsEnRevision = documentos.filter(p => p.Estado === 'EnRevision' ).length;
        this.numPDFsPendientes = documentos.filter(p => p.Estado === 'Pendiente' ).length;
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
  
  redirectToPDF(documento: Documento) {
    if (documento && documento.idDocumento) {
      const url = ['ver-proyecto', documento.idDocumento];
      this.router.navigate(url);
    } else {
      console.error('ID de proyecto indefinido. No se puede navegar.');
    }
  }

}


