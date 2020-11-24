import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymServicesComponent } from './gym-services/gym-services.component';
import { ModalitiesComponent } from './modalities/modalities.component';

@NgModule({
  declarations: [		
    AppComponent,
      GymServicesComponent,
      ModalitiesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
