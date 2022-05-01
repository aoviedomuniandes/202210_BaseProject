import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [ListarVehiculoComponent],
  exports: [ListarVehiculoComponent]
})
export class VehiculoModule { }
