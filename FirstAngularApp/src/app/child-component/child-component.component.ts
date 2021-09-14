import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  // Here by using @Input decorator we are using values assigned to the properties 'name' and 'address' declared in app.component.html.
  @Input("name")
  name?:string;

  // We can skip the arguments to @Input() decorator.
  @Input()
  designation?:string;

  @Input("address")
  address?:string;

  @Input()
  adrs?:string;

  // Below properties are declared in app.component.ts.
  @Input()
  PName?:string;

  @Input()
  Team?:string;

  // @Output Decorator is used to raise an event from child component(child-component.component.ts) to parent component (app.component.ts).
  // To raise an event we use EventEmitter class and its emit() funciton.
  // So lets create an object of EventEmitter class and assign it to a variable.

  @Output()
  myclick = new EventEmitter();

  // Now this event should be raised from child component to parent component.

  // This method is going to emit an event 'myClick()' i.e. raising that event.
  // Now in order to perform something when event is raised, we need to listen that event in Parent component(app.component.ts). 
  raiseEvent(){
    this.myclick.emit();
  }

  // Now here we are going to create another event which will pass some data also whenever the event will be raised.
  @Output()
  sendData = new EventEmitter();

  
  raiseEventWithData(arg:any){
    
    this.sendData.emit(arg);
  }

  constructor() { }

  ngOnInit(): void {
  }

  functionX(){
    console.log("This is from child-component.component.ts");
  }
}
