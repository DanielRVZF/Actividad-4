import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css'],
})
export class RegistroProductoComponent {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder) { // Se toma como parametro la instancia de FormBuilder
    this.productoForm = this.fb.group({  // Contiene los tres siguientes campos ´
      
      serial: ['', Validators.required], // Se valida que el usuario no deje este campo sin ingresar valor
      nombre: ['', Validators.required], // Se valida que el usuario no deje esta campo sin valor
      valor: [0, Validators.required], // Se valida que el valor sea númerico
    });
  }

  tomarFoto() { // Meoto para tomar foto
  //Logica que se incluria en android Studio para tonmar foto
  }

  registrarProducto() { // Esta función valida que antes de enviar formulario los cambos el usuario ingreso los datos 
    if (this.productoForm.valid) {
      const productoData = this.productoForm.value;
      
      console.log(productoData);
    } else {
      
    }
  }
}
