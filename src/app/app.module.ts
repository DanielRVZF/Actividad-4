import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RegistroComponent } from './components/registro/registro.component';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento
import { MenuComponent } from './components/menu/menu.component';
import { MenuInventarioComponent } from './components/menu-inventario/menu-inventario.component';
import { ConsultarProductoComponent } from './components/consultar-producto/consultar-producto.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MenuComponent,
    MenuInventarioComponent,
    ConsultarProductoComponent,
    RegistroProductoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
