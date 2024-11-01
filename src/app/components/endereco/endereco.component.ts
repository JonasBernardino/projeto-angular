import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CepService } from '../../services/cep/cep.service';

export interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css',
})
export class EnderecoComponent {
  cep: string = '';
  endereco = new Observable<Endereco>();

  constructor(private cepService: CepService) {}

  buscaEndereco() {
    this.endereco = this.cepService.buscaEndereco(this.cep);
  }
}
