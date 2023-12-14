import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css']
})
export class ImprimirComponent implements OnInit {
  documentoForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    fileSource: new FormControl('', [Validators.required]),
  });
  
  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.documentoForm.patchValue({
        fileSource: file
      });
    }
  }

  onSubmit(): void {
    const email = this.documentoForm.get('email').value;
    const documento = this.documentoForm.get('fileSource').value;
    console.log("Email: ",email);

    if (email && documento) {
      this.apiService.registrarDocumento(email, documento).subscribe(
        (documentoResponse) => {
          if (documentoResponse && documentoResponse.success) {
            console.log('Documento registrado con éxito.');
          } else {
            console.error('Error al registrar documento.');
          }
        },
        (documentoError) => {
          console.error('Error en la solicitud para registrar documento: ', documentoError);
        }
      );
    }
  }
}
