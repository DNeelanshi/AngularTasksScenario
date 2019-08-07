import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

 public inputval=""
 @Output() public checkevent = new EventEmitter(); //sending data to parent component
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.inputval);
    this.checkevent.emit(this.inputval); //emiting the event to padd data
  }
}
