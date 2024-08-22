import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atleta } from '../model/atleta.model';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {
  baseurl="http://localhost:8080/atletas";
  constructor(private http : HttpClient) {

   }
  getTodosAtletas(filtro: string): Observable<Atleta[]>{
    if (filtro != "") {
      console.log(filtro);
      return this.http.get<Atleta[]>(this.baseurl+`/${ filtro }`);
    } else return this.http.get<Atleta[]>(this.baseurl);
  }
}
