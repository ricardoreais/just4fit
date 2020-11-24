import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymServicesComponent } from './gym-services/gym-services.component';
import { ModalitiesComponent } from './modalities/modalities.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: ModalitiesComponent },
  { path: 'gym-services', component: GymServicesComponent },
  { path: 'schedule', component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
