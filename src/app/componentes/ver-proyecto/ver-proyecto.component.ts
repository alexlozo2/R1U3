// ver-proyecto.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { VerProyecto } from 'src/app/Models/VerProyecto.model';
import { Documento } from 'src/app/Models/Documento.model';

@Component({
  selector: 'app-ver-proyecto',
  templateUrl: './ver-proyecto.component.html',
  styleUrls: ['./ver-proyecto.component.css']
})
export class VerProyectoComponent implements OnInit {
  verProyecto: VerProyecto;
  verDocumento: Documento;
  idProyecto: number;
  idDocumento: number;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idProyecto = +params.get('id'); // Convierte el parámetro a número y asigna a this.idProyecto
      if (!isNaN(this.idProyecto)) {
        this.loadProyecto(this.idProyecto);
      }
    });
    this.route.paramMap.subscribe((params) => {
      this.idDocumento = +params.get('id'); // Convierte el parámetro a número y asigna a this.idProyecto
      if (!isNaN(this.idDocumento)) {
        this.loadPDF(this.idDocumento);
      }
    });
    console.log("Datos de PDF: ",this.verDocumento);
  }  

  loadProyecto(idProyecto: number) {
    this.apiService.getProyectoDetallado(idProyecto).subscribe(
      (verProyecto: VerProyecto) => {
        this.verProyecto = verProyecto;
      },
      (error) => {
        console.error('Error al cargar proyecto:', error);
      }
    );
  }

  loadPDF(idDocumento: number) {
    this.apiService.getPDF(idDocumento).subscribe(
      (verDocumento: Documento) => {
        this.verDocumento = verDocumento;
        console.log("Datos del pdfaa: ",this.verDocumento);
      },
      (error) => {
        console.error('Error al cargar PDF: ', error)
      }
    )
  }

  terminado(idProyecto: number): void {
    this.apiService.terminado(idProyecto).subscribe(
      (response) => {
        this.loadProyecto(this.idProyecto);
      },
      (error) => {
        console.error('Error al actualizar el estado del proyecto', error);
        // Puedes manejar el error aquí si es necesario
      }
    );
  }

  getPDFUrl(pdf: string): string {
    // Construye la URL completa al archivo PDF
    return `http://localhost:8080/pdf/${pdf}`;
  }

  extractFileName(pdf: string): string {
    // Extrae el nombre del archivo de la ruta completa
    const parts = pdf.split('/');
    return parts[parts.length - 1];
  }

}
