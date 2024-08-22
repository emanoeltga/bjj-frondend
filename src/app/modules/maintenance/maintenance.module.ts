import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AcademiaComponent } from './pages/academia-table-page/academia-table-page.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CreateCategoriaComponent } from './pages/categoria/create-categoria/create-categoria.component';
import { EditCategoriaComponent } from './pages/categoria/edit-categoria/edit-categoria.component';
import { DeleteCategoriaComponent } from './pages/categoria/delete-categoria/delete-categoria.component';
import { AtletasTablePageComponent } from './pages/atletas-table-page/atletas-table-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AcademiaComponent,
    CategoriaComponent,
    UsuarioComponent,
    CreateCategoriaComponent,
    EditCategoriaComponent,
    DeleteCategoriaComponent,
    AtletasTablePageComponent,

  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    DecimalPipe,
    FormsModule
  ], exports:[

  ]
})
export class MaintenanceModule { }
