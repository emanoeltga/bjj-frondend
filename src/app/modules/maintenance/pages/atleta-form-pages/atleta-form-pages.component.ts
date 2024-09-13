import { Atleta } from './../../../../core/model/atleta.model';

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AtletaService } from '../../../../core/servicos/atleta.service';
import { Categoria } from '../../../../core/model/categoria.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-atleta-form-pages',
  templateUrl: './atleta-form-pages.component.html',
  styleUrl: './atleta-form-pages.component.css',
})
export class AtletaFormPagesComponent implements OnInit, OnChanges {
  @Input()
  atleta: Atleta = {} as Atleta;

  @Input()
  categorias: Categoria[] = [];
  formGroupAtleta: FormGroup;

  @Output()
  saveEmitter = new EventEmitter();

  @Output()
  editEmitter = new EventEmitter();


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private altetaService: AtletaService
  ) {
    this.formGroupAtleta = this.formBuilder.group({
      id: { value: null, disabled: true },
      name: ['', [Validators.required, Validators.minLength(3)]],
      peso: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.altetaService.getCategorias().subscribe({
      next: (categoria) => (this.categorias = categoria),
      error: (erros) => {
        console.log('Error: ' + erros);
      },
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.atualizaTela();
  }
  inicializaForm(){
    this.formGroupAtleta = this.formBuilder.group({
      id: { value: null, disabled: true },
      name: ['', [Validators.required, Validators.minLength(3)]],
      peso: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    });
  }
  save(): void {
    let id:any;
    if (this.formGroupAtleta.valid) {
      Object.assign(this.atleta, this.formGroupAtleta.value);

      this.altetaService.postAtleta(this.atleta).subscribe({
        next: (data) => {
          console.log(data);
          this.atleta=data;
          this.saveEmitter.emit(true);
          this.atualizaTela();
        },
        error: (erros) => {
          console.log(erros);
        },
      });

    }
  }
  atualizaTela(): void{
    if (this.atleta.id != null) {
      this.formGroupAtleta.setValue(this.atleta);
    } else this.inicializaForm();
  }

  cancel(): void {
    this.saveEmitter.emit(false);
    //this.router.navigate(['atletas-table-page']);
  }
  selectedCategory(category1: Categoria, category2: Categoria) {
    return category1 && category2 ? category1.id === category2.id : false;
  }
  get pfgNome() {
    return this.formGroupAtleta.get('name');
  }
  get pfgIdade() {
    return this.formGroupAtleta.get('idade');
  }
  get pfgCategoria() {
    return this.formGroupAtleta.get('categoria');
  }
  get pfgPeso() {
    return this.formGroupAtleta.get('peso');
  }
}
