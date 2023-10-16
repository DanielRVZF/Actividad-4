import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component'; 
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { ConsultarProductoComponent } from './components/consultar-producto/consultar-producto.component';
import { MenuInventarioComponent } from './components/menu-inventario/menu-inventario.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'registro-producto', component: RegistroProductoComponent },
  { path: 'consultar-producto', component: ConsultarProductoComponent } ,
  { path: 'menu-inventario', component: MenuInventarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
