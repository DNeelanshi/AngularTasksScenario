import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public name="";
  public displayname=true;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.displayname = false;
  }
}
