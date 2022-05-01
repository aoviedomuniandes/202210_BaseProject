import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

private apiUrl: string = environment.baseUrl + '202212_MISW4104_Grupo1.json';

constructor(private httpClient: HttpClient){ }

getVehiculos(): Observable<Vehiculo[]>{
  return this.httpClient.get<Vehiculo[]>(this.apiUrl).pipe(
    map((data: any[]) =>
      data.map(
        (item: any) =>
          new Vehiculo(item.id, item.marca,item.linea,item.referencia,item.modelo,item.kilometraje,item.color,item.imagen)
      )
    )
  );
}

}
