import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.css']
})
export class ViewCompComponent implements OnInit {

  public result:number=0;
  public days:number=0;
  public final:number=0;

  constructor(private bill:TestService) { }

  ngOnInit() {
  }

  onclick(e){
    this.days = Number(e.target.value);
    if(e.target.value == "1"){
    this.result = this.days*30;
    console.log(this.result); 
      this.display();
    } 
    else if(e.target.value == "2"){
      this.result = this.days*365;
      console.log(this.result); 
        this.display();
  }
}

  display(){
      console.log(this.result); 
      this.final = this.result;
  }


    
  }


