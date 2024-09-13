import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Atleta } from '../model/atleta.model';
import { Categoria } from '../model/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  readonly baseurl = 'http://localhost:8080';
  readonly myheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getTodosAtletas(filtro: string): Observable<Atleta[]> {
    let url = this.baseurl + `/atletas`;
    if (filtro != '') {
      console.log(filtro);
      url = this.baseurl + `/${filtro}`;
    }

    return this.http.get<Atleta[]>(url);
  }
  deleta(atleta: Atleta) {
    let url = this.baseurl + `/atletas/${atleta.id}`;
    return this.http.delete(url, this.myheaders).subscribe((data) => {
      console.log(data);
    });
  }
  postAtleta(atleta: Atleta) {
    return this.http
      .post<Atleta>(
        this.baseurl + `/atletas`,
        JSON.stringify(atleta),
        this.myheaders
      );
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseurl + `/categorias`);
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
