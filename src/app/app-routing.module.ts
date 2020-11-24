import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymServicesComponent } from './gym-services/gym-services.component';
import { ModalitiesComponent } from './modalities/modalities.component';

const routes: Routes = [
  { path: '', component: ModalitiesComponent },
  { path: 'gym-services', component: GymServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
