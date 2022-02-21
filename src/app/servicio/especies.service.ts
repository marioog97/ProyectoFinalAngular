import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  constructor(private httpClient: HttpClient) { }
  url: string = "https://run.mocky.io/v3/cf6c951c-e0a8-42f8-88b9-ed421552aefe";
  listarEspecies(): Observable<any> {
    return this.httpClient.get(this.url)

  }

  listadoDeEspecies(): any {
    return this.httpClient.get(this.url)
  }
}
