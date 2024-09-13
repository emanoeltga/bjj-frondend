import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AcademiaComponent } from './pages/academia-table-page/academia-table-page.component';
import { AtletasTablePageComponent } from './pages/atletas-table-page/atletas-table-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtletaFormPagesComponent } from './pages/atleta-form-pages/atleta-form-pages.component';


@NgModule({
  declarations: [
    AcademiaComponent,
    AtletasTablePageComponent,
    AtletaFormPagesComponent,

  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    DecimalPipe,
    FormsModule,
    ReactiveFormsModule
  ], exports:[

  ]
})
export class MaintenanceModule { }
