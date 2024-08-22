import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobreComponent } from '../sobre/sobre.component';
import { AcademiaComponent } from '../maintenance/pages/academia-table-page/academia-table-page.component';


const routes: Routes = [
  { path:"home", component: HomePageComponent },
  { path:"sobre", component: SobreComponent},
  { path:"academia", component: AcademiaComponent },
  /*{ path:"ranks", component: RankComponent },
  { path:"eventos", component: EventosComponent },
  { path:"academia", component: AcademiaComponent },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
