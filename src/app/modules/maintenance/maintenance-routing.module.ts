import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademiaComponent } from './pages/academia-table-page/academia-table-page.component';

import { AtletasTablePageComponent } from './pages/atletas-table-page/atletas-table-page.component';
import { AtletaFormPagesComponent } from './pages/atleta-form-pages/atleta-form-pages.component';

const routes: Routes = [
  {path:"academia", component: AcademiaComponent},
  {path:"atletas-table-page", component: AtletasTablePageComponent},
  {path:"atletas-form-page", component: AtletaFormPagesComponent},
  {path:"atletas-form-page/:id", component: AtletaFormPagesComponent},
 // {path:"categoria", component: CategoriaComponent},
  //{path:"usuario", component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
