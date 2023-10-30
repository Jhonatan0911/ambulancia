import { Injectable } from '@angular/core';
import { BaseService } from './baseService';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Ambulancia } from '../models/Ambulancia';

@Injectable({
  providedIn: 'root'
})
export class AmbulanciaService extends BaseService{

  path: string = "ParAmbulancia/";

  constructor(
    private http: HttpClient
  ){
    super();
  }

  getAll(data:any): Observable<any> {
    return this.http
    .get<Response<Ambulancia[]>>(this._baseUrl + this.path + "/ObtenerListadodeAmbulancias?Filtro="+data.filtro+"&Estado="+data.estado)
    .pipe(
      map((response) => response),
      tap((a) => {
        this.logs('Buscar ambulancias pro filtro');
        this.logs(a);
      }),
      catchError(this.errorMgmt)
    );
  }

}
