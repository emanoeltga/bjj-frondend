import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { SobreComponent } from './modules/sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:"sobre", component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
