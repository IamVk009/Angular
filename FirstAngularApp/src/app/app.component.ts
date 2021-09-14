import { Component } from '@angular/core';
import { TrimPipe } from './trim.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';

  name:string = "Adam Zampa";

  salary:number = 1000000;

  getMessage(){
    return "First Angular Application"
  }

  today?:string; 

  // don't worry about the argument of constructor. It is in context of injecting TrimPipe class into app.component.ts which is discussed later on line No. 125.
  constructor(private trimp:TrimPipe){

    setInterval(()=>{
      let cdate = new Date();
      this.today = cdate.toString();
    },1000);
    
  }

  country:string = "India";

  currency:string = "Rupees";

  imgUrl = "assets/Night King.jpg";

  imgHeight = "900";

  imgWidth = "1600";

  isActive:boolean = true;

  isTrue:boolean = true;

  // The value of this variable is used as class name in app.component.html which is defined in app.component.css file. 
  class2:string = "class2";

  id:string = "id";

  col:string = "blue";

  function1(){
    console.log("Button Clicked......!!");
  }

  function2(e:any){
    console.log("Button Clicked......!!");
    console.log(e);
    console.log(e.target);
    console.log(e.target.textContent);
  }

  function3(e:any){
    console.log("Button Clicked......!!");
    console.log(e);
  }

  function4(e:any){
    console.log("Sent Data...!!!!");
    console.log(e);
    console.log(e.textContent);
  }

  function5(e:any){
    console.log("Sent Data...!!!!");
    console.log(e);
    console.log(e.textContent);
  }

  function6(e:any){
    console.log("Sent Email...!!!!");
    console.log(e);
    console.log(e.value);
  }

  function7(e:any){
    console.log("Sent Child Component...!!!!");
    console.log(e);
    e.functionX();  
  }

  // Two way Data-Binding
  text1:string = "I am Flash";

  text2:string = "I am Flash";

  text3:string = "Two way data binding without ngModel";

  //Pipe in Angular
  player = {
    JerseyNo: 45,
    Name: "Rohit Sharma",
    Matches: 155,
    Runs: 8977,
    BasePrice: 7000,
    Avg: 45.7687,
    StrikeRate: 113.65,
    Dob: new Date(1987,6,15),
    Country: "India",
    Description: "Right Hand Opening Batsman",
    Description1: "Opening Batsman",
    Description2: "Hello world Opening Batsman",
    Description3: "This text can truncate and expand."
  }


  // Using TrimPipe class transformation function manually.
  trimDescription2(){
    
    let tpipe = new TrimPipe();
    this.player.Description2 = tpipe.transform(this.player.Description2);
  }

  temp:any;

  // Using TrimPipe class transformation function as Dependency Injection.
  trimDescription(){
    this.temp = this.player.Description3;
    this.player.Description1 = this.trimp.transform(this.player.Description1);

  }

  // Using TrimPipe class transformation function as Dependency Injection to truncate the string.
  trimDescription3(){
    this.temp = this.player.Description3;
    this.player.Description3 = this.trimp.transform(this.player.Description3);

  }

  // This function is used to expand the string whenever user clicks on truncated string.
  expand(){
    this.player.Description3 = this.temp;
  }

  // The below values will be used in child-component.component.ts and from their child-component.component.html.
  playerName = "Keiron Pollard";

  team = "Mumbai Indians";

  //-----------------------------------------------------------------------------------------------------------------//
  // The below part will handle event raised from child component (child-component.component.ts)
  sentence = "Look at me when event is raised from child component";
  handleEvent(){
    this.sentence = "Event is raised from child component";
  }

  data = "Look at me to see the data passed from child component after event is raised";
  handleEventWithData(data:any){
    this.data = data;
  }
}
