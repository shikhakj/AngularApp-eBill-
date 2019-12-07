import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCompComponent } from './view-comp/view-comp.component';
import { HttpClient } from 'selenium-webdriver/http';
import { AddressCardComponent } from '../address-card/address-card.component';



@NgModule({
  declarations: [ViewCompComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot ([
      {
       path : 'address-card',
       component:AddressCardComponent
    }
    {
      path : 'view',
      component : ViewCompComponent
    }
    
  ])
  ],
  
  exports: [
    ViewCompComponent,
    AddressCardComponent
    
  ]
})
export class ViewModule { }
