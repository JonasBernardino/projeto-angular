import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Endereco } from '../../components/endereco/endereco.component';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  buscaEndereco(cep: string):Observable<Endereco> {
    return this.http.get<Endereco>(`${this.apiUrl}${cep}/json/`);
  }
}
