import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  constructor(private httpClient: HttpClient) { }
  url: string= "https://run.mocky.io/v3/d20a207b-6781-4111-811b-3ae81e98bc2c";

  listarEspecies():Observable<any>{
    return this.httpClient.get(this.url)

  }

  listadoDeEspecies():any{
    return this.httpClient.get(this.url)
  }
}
