import { Categoria } from './categoria.model';
import { Person } from "./person.model";

export interface Atleta extends Person {

  idade: string;
  categoria: Categoria;
}
