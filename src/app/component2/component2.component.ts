import { Component, OnInit,EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public message =""
  public msgg = ""
 @Output() public childevent = new EventEmitter();
  constructor() { 
  
  }

  ngOnInit() {
    console.log(this.message)
    if(this.message != ""){
      
    }
  }
  send(){
console.log(this.message);
this.childevent.emit(this.message);
  }

}
