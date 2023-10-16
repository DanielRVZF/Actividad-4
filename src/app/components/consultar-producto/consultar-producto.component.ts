import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit {
  consultaForm: FormGroup; // Se declara consultaForm, que sera empleado 

  constructor(private formBuilder: FormBuilder) { // crear formularios llamados consultaForm
    this.consultaForm = this.formBuilder.group({
      busqueda: ['']  
    });
  }

  ngOnInit() {
    
  }

  consultarProducto() { // Metodo para consultar productos 
    // lógica para consultar productos
  }

  consultarNovedades() { // Meotodo para consultar novedades
    // lógica para consultar novedades
  }
}
