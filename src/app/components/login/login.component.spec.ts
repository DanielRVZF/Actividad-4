import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent; /* Se declara la variable LoginComponent que se emple para almacenar la instancia del componente
  LoginComponent.
  */
  let fixture: ComponentFixture<LoginComponent>; /*Se declara la variable fixture que se emplea para almacenar la instancia
  del componente ComponentFixture<LoginComponent> */

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
