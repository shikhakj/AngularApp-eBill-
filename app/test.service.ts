import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { AddressCardComponent } from './address-card/address-card.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor() { }
 
  getbillDetails(id,date,units){
    return this.http.post<my-data>
  }

  showBill(id,date,units){
    return this.http.post('/api/eBill',{
      id,
      date,
      units
    })

    }
  }
}
