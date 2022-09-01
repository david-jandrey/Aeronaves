import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Aeronave } from '../models/aeronave';

@Injectable({
  providedIn: 'root'
})
export class AeronavesService {
  
  url = 'http://localhost:8080/api/aeronaves'; 
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  getAeronave(): Observable<Aeronave[]> {
    return this.httpClient.get<Aeronave[]>(this.url+"/")
      .pipe(
        retry(2),
        catchError(this.handleError)) 
  }
  //requisição asyncrona para ficar observando esta requisição acaba ele irá fazer algo
  saveAeronave(aeronave: Aeronave): Observable<Aeronave> {
    return this.httpClient.post<Aeronave>(this.url, JSON.stringify(aeronave), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  updateAeronave(aeronave: Aeronave): Observable<Aeronave> {
    return this.httpClient.put<Aeronave>(this.url + '/' + aeronave.id, JSON.stringify(aeronave), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  DeleteAeronave(aeronave: Aeronave) {
    return this.httpClient.delete(this.url + '/' + aeronave.id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  listar(): Observable<{ id: number, nome: string,
    marca: string, ano: number, descricao: string,
    vendido: boolean }[]> {
    return this.httpClient
        .get<any[]>(this.url+"/")
        .pipe(
            map(dadosDaApi => {
                return dadosDaApi.map(a => {
                    return {
                        id: a.id,
                        nome: a.nome,
                        marca: a.marca,
                        ano: a.ano,
                        descricao: a.descricao,
                        vendido: a.vendido
                    };
                });
            })
        );
}

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;
    } else {

      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
