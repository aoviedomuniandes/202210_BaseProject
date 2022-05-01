import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  resumen: Map<string, number> =  new Map<string, number>();

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos();

  }

  getVehiculos(){
    this.vehiculoService.getVehiculos().subscribe((vehiculos: Array<Vehiculo>) => {
      this.vehiculos = vehiculos;
      this.createResume();
    });
  }

  createResume(){
    this.vehiculos.forEach(vehiculo => {
      if(this.resumen.get(vehiculo.marca) != null){
        let cantidadActual = this.resumen.get(vehiculo.marca) as number;
        cantidadActual = cantidadActual + 1;
        this.resumen.set(vehiculo.marca,cantidadActual)
      }else{
        this.resumen.set(vehiculo.marca,1)
      }
    });
    console.log("holaaa", this.resumen);


  }

}
