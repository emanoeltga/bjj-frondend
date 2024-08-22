import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from '../modules/home/home-routing.module';
import { MaintenanceRoutingModule } from '../modules/maintenance/maintenance-routing.module';
import { ScheduleRoutingModule } from '../modules/schedule/schedule-routing.module';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeRoutingModule,
    MaintenanceRoutingModule,
    ScheduleRoutingModule
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
