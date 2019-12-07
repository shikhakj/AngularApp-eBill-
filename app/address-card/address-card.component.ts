import { Component, NgModule, Input, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { isNgContainer } from '@angular/compiler';
import { Bill } from './bill.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})

 // template: <button (click)="onClickMe()">Click me!</button>
 // {{clickMessage}}

export class AddressCardComponent implements OnInit{
   
    @Input('bill') bill:Bill;
    isCollapsed:boolean=true;
  
  constructor(){
    
  }

  togglecollapse(){
      this.isCollapsed=!this.isCollapsed;

  }

  ngOnInit(){
    
  }
}


export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'Record Saved';
  }
}