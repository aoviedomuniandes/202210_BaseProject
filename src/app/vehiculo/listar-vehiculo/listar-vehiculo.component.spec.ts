/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';

import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { Vehiculo } from '../vehiculo';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVehiculoComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;

    component.vehiculos = [];

    for (let index = 0; index < 3; index++) {
        component.vehiculos.push(new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ));
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table header', () => {
    const textElement = fixture.debugElement.query(By.css("thead"));
    expect(textElement).toBeTruthy();
  });


  it('should have table detail ', () => {
    const textElement = fixture.debugElement.query(By.css("tr"));
    expect(textElement).toBeTruthy();
  });

});
