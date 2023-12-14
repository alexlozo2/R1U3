// iniciar-sesion.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Usuario } from 'src/app/Models/usuario.model';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent {
  usuario: Usuario = { id: 0, nombreUsuario: '', contrasena: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  iniciarSesion() {
    this.apiService.login(this.usuario).subscribe(
      (respuesta) => {
        // Manejar la respuesta del servidor (éxito o error)
        if (respuesta.autenticado) {
          // Redirigir a la página después de iniciar sesión exitosamente
          this.router.navigate(['/dashboard']);
        } else {
          // Mostrar un mensaje de error al usuario
          alert('Error al iniciar sesión. Verifica tus credenciales.');
        }
      },
      (error) => {
        console.error('Error en la solicitud de inicio de sesión:', error);
      }
    );
  }
}
