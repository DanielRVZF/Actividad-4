import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ProductoService } from 'src/app/interface/producto.service';

@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit {
  consultaForm: FormGroup; // Se declara consultaForm, que sera empleado 
  productosEncontrados: any[] = []; // Almacenará los resultados de la búsqueda

  productoEditado: any = null;
  productoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productoService: ProductoService) {
    this.consultaForm = this.formBuilder.group({
      busqueda: ['']
    });

    this.productoForm = this.formBuilder.group({
      serial: [''],
      nombre: [''],
      valor: [null]
    });
  }

  

  ngOnInit() {
    
  }

  async borrarProducto(producto: any) {
    const serial = producto.serial; // Asegúrate de que esto sea el valor correcto.
    console.log('Serial a borrar:', serial); // Agrega esta línea para depurar
  
    if (serial) {
      try {
        await this.productoService.borrarProductoPorSerial(serial);
        this.consultarProducto(); // Actualiza la lista de productos después de la eliminación.
      } catch (error) {
        console.error(error);
        console.error('Error al intentar eliminar el producto:', error);
      }
    }
  }
  
  

  async consultarProducto() {
    // Borra la lista de productos antes de realizar una nueva consulta.
    this.productosEncontrados = [];
  
    const serialBuscado = this.consultaForm.get('busqueda')?.value;
    
    try {
      const resultados = await this.productoService.buscarProductoPorSerial(serialBuscado);
      this.productosEncontrados = resultados;
    } catch (error) {
      console.error(error);
    }
  }
  
  editarProducto(producto: any) {
    this.productoEditado = producto;
    this.productoForm.setValue({
      serial: producto.serial,
      nombre: producto.nombre,
      valor: producto.valor
    });
  }

  guardarCambios() {
    if (this.productoEditado) {
      const nuevosDatos = this.productoForm.value;
      // Llama a tu servicio para actualizar el producto en Firestore
      this.productoService.actualizarProducto(this.productoEditado.serial, nuevosDatos);
      this.productoEditado = null;
      this.productoForm.reset();
      this.consultarProducto();
    }
  }

  cancelarEdicion() {
    this.productoEditado = null;
    this.productoForm.reset();
  }
  consultarNovedades(){}



}
  
  
  

