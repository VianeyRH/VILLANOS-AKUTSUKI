import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { VillanosComponent } from './villanos/villanos.component';
import { VillanosDetailComponent } from './villanos-detail/villanos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VillanosComponent,
    VillanosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
