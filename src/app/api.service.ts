import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ObservableService } from './services/observable.service';
import { Usuario } from './Models/usuario.model';
import { Documento } from './Models/Documento.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private observableService: ObservableService) { }

  // Método para realizar una solicitud GET a una API en el backend.
  public get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url);
  }

  // Método para realizar una solicitud POST a una API en el backend.
  public post(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, data, { headers });
  }

  login(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}/api/login.php`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, usuario, { headers });
  }

  //registrarDocumentos
  registrarDocumento(gmailPropietario: string, documento: File): Observable<any> {
    const url = `${this.apiUrl}/api/registrarDocumento.php`;

    const formData = new FormData();
    formData.append('gmailPropietario', gmailPropietario); 
    formData.append('documento', documento);

    return this.http.post(url, formData);
  }

  loadPDFs(): Observable<Documento[]> {
    const url = `${this.apiUrl}/api/loadPDFs.php`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<Documento[]>(url, { headers });
  }

  getPDF(idDocumento: number): Observable<Documento> {
    const url = `${this.apiUrl}/api/loadDocumentoById.php?idDocumento=${idDocumento}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<Documento>(url, { headers });
  }

  enRevision(idDocumento: number): Observable<any> {
    const url = `${this.apiUrl}/api/enRevisionC.php`;
    return this.http.post(url, { idDocumento })
      .pipe(tap(() => this.observableService.notifyProjectUpdate()));;
  }

  aceptado(idDocumento: number): Observable<any> {
    const url = `${this.apiUrl}/api/aceptado.php`;
    return this.http.post(url, { idDocumento })
      .pipe(tap(() => this.observableService.notifyProjectUpdate()));;
  }

  rechazado(idDocumento: number): Observable<any> {
    const url = `${this.apiUrl}/api/rechazado.php`;
    return this.http.post(url, { idDocumento })
      .pipe(tap(() => this.observableService.notifyProjectUpdate()));;
  }

  enviarCorreo(documento: Documento): Observable<any> {
    const url = `${this.apiUrl}/api/enviarEmail.php`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, JSON.stringify(documento), { headers, withCredentials: true });
  }
  enviarCorreo2(documento: Documento): Observable<any> {
    const url = `${this.apiUrl}/api/enviarEmail2.php`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, JSON.stringify(documento), { headers, withCredentials: true });
  }

}
