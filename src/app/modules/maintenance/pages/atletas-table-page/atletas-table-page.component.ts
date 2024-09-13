import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from '../../../../core/model/atleta.model';
import { AtletaService } from './../../../../core/servicos/atleta.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-atletas-table-page',
  templateUrl: './atletas-table-page.component.html',
  styleUrl: './atletas-table-page.component.css',
})
export class AtletasTablePageComponent implements OnInit {
  atletas: Atleta[] = [];
  atleta: Atleta = {} as Atleta;
  filtro: string = '';

  @Output()
  limpaEmitter = new EventEmitter();/**/

  /*@Output()
  editEmitter = new EventEmitter();*/

  showForm: boolean = false;
  isEditing: boolean = false;

  constructor(
    private atletaService: AtletaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAtleta();
  }
  getAtleta() {
    this.atletaService.getTodosAtletas(this.filtro).subscribe({
      next: (ratletas) => (this.atletas = ratletas),
      error: (erros) => {console.log("Error: "+erros)},
    });
  }
  aplicarFiltro() {
    this.getAtleta();
  }
  edit(atleta: Atleta){
    //this.editEmitter.emit(atleta);
    this.atleta=atleta;
    //this.router.navigate(['atletas-form-page', atleta.id],);// { relativeTo: this.route });

  }
  deleteAtleta(atleta: Atleta) {
    this.atletaService.deleta(atleta);
    this.atletas.splice(this.atletas.indexOf(atleta), 1);
    //this.atletas.next(this.atletas);

    //this.router.navigate(['product']);
  }
  atualizaTela(){
    this.getAtleta();
    this.atleta= {} as Atleta;
    this.limpaEmitter.emit();
  }
}
