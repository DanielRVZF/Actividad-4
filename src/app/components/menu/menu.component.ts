import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent { // se define las clases del componente 
  constructor(private router: Router) {}

  goToLogin() { // Este metodo se implementa cuando el usuario da clic en el botón de ingresar al login 
    this.router.navigate(['/login']); // Se emplea el servicio de Router para realiza lar navegación a la ruta /login 
  }

  goToRegistro() {// Este metodo se implementa cuando el usuario da clic en el botón de ingresar al registro de usuarios 
    this.router.navigate(['/registro']);// Se emplea el servicio de Router para realiza lar navegación a la ruta /registro
  }
}
