import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GymServicesComponent } from './gym-services/gym-services.component';
import { InstallationsComponent } from './installations/installations.component';
import { IntroComponent } from './intro/intro.component';
import { ModalitiesComponent } from './modalities/modalities.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'modalities', component: ModalitiesComponent },
  { path: 'installations', component: InstallationsComponent },
  { path: 'gym-services', component: GymServicesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'pricing', component: PricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
