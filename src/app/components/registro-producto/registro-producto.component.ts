import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProducto } from 'src/app/interface/producto';
import { ProductoService } from 'src/app/interface/producto.service';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css'],
})
export class RegistroProductoComponent {
  // Define un formulario de Angular para recopilar datos del usuario.
  productoForm: FormGroup;
  imageUrl!: any;
  exitoMensaje: string = '';

  constructor(private fb: FormBuilder, private firebase: ProductoService) {
    this.productoForm = this.fb.group({
      serial: ['', Validators.required], 
      nombre: ['', Validators.required],
      valor: [null, Validators.required],
    });
  }

  tomarFoto = async ()=> {
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    let imageUrl = image.webPath;
    this.imageUrl = imageUrl;
  };
  
  registrarProducto(): void {
    if (this.productoForm.valid) {
      const regProducto: IProducto = this.productoForm.value;
      this.firebase.addProducto(regProducto);
  
      this.exitoMensaje = 'El producto se ha registrado exitosamente.';
      this.productoForm.reset(); //restablecerá los campos del formulario.
  
      //temporizador para borrar el mensaje de éxito después de un tiempo.
      setTimeout(() => {
        this.exitoMensaje = '';
      }, 3000); // 3000 milisegundos (3 segundos) 
    }
  }
}  
