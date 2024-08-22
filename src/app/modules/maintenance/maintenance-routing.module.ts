import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademiaComponent } from './pages/academia-table-page/academia-table-page.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AtletasTablePageComponent } from './pages/atletas-table-page/atletas-table-page.component';

const routes: Routes = [
  {path:"academia", component: AcademiaComponent},
  {path:"atletas-table-page", component: AtletasTablePageComponent},
  {path:"categoria", component: CategoriaComponent},
  {path:"usuario", component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
