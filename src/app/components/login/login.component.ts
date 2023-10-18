import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup; // Se define el tipo de objeto tipo FormGroup, que se emplea para gestionar los campos del formulario email y password

  constructor( // El metodo constructor se emplea para inicializar las propiedades y configurar el formulario
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() { // metodo que se invoca cuando se realiza el envio del formulario 
    this.userService.login(this.formLogin.value) // Se llama un servico de userService, para gestionar la auntentificación
      .then(response => {
        console.log(response);
        this.router.navigate(['/menu-inventario']);
      })
      .catch(error => console.log(error));
  }
}
