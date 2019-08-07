import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public inputname="";
  @Output() public checkevent = new EventEmitter(); //passind tata to parent 
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.checkevent.emit(this.inputname); //eent firing to padd data 
  }

}
