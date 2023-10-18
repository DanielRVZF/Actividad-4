import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/service/user.service'; // Asegúrate de importar el servicio UserService.

@Component({
  selector: 'app-menu-inventario',
  templateUrl: './menu-inventario.component.html',
})
export class MenuInventarioComponent {

  constructor(private router: Router, private userService: UserService) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegistro() {
    this.router.navigate(['/registro']);
  }

  desloguear() {
    this.userService.logout() // Llama al método de UserService para cerrar la sesión del usuario.
      .then(() => {
        // Si el deslogueo es exitoso, redirige al usuario a la página de inicio de sesión.
        this.router.navigate(['/menu']);
      })
      .catch(error => console.log(error));
  }
}
