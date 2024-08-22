import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { KeyComponent } from './key/key.component';
import { RankComponent } from './rank/rank.component';

const routes: Routes = [
  {path:"eventos", component:EventosComponent},
  {path:"ranks", component:RankComponent},
  {path:"keys", component:KeyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
