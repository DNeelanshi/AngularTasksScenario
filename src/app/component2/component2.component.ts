import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {


  @Output() public childvalue = new EventEmitter();
  public childname ="";

  constructor() { }


  ngOnInit() {
  }

  sendevent(){
console.log(this.childname)
  this.childvalue.emit(this.childname);
  }

}
