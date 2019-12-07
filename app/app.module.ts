import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ViewCompComponent} from './view/view.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule} from './view/view.module';
import{TestService } from './test.service';
import { RouterModule, Routes} from '@angular/router';
import {MatToolBarModule} from'@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    AddressCardComponent,
    ViewCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
