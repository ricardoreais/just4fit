import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymServicesComponent } from './gym-services/gym-services.component';
import { ModalitiesComponent } from './modalities/modalities.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { InstallationsComponent } from './installations/installations.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [						
    AppComponent,
      GymServicesComponent,
      ModalitiesComponent,
      ScheduleComponent,
      AboutComponent,
      InstallationsComponent,
      IntroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
