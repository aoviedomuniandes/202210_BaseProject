/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Vehiculo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculoService],
      imports: [ HttpClientModule ]
    });
  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
