import { Atleta } from '../../../../core/model/atleta.model';
import { AtletaService } from './../../../../core/servicos/atleta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atletas-table-page',
  templateUrl: './atletas-table-page.component.html',
  styleUrl: './atletas-table-page.component.css'
})
export class AtletasTablePageComponent implements OnInit {

  atletas: Atleta[]=[];
  filtro:string ="";
  constructor(private atletaService: AtletaService) {

  }
  ngOnInit(): void {
    this.getAtleta();
  }
  getAtleta() {
    this.atletaService.getTodosAtletas(this.filtro).subscribe({
      next: (atletas) => this.atletas = atletas
    });
  }
  aplicarFiltro(){
    this.getAtleta();
  }
}

