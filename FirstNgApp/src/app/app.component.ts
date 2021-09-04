import { Component } from '@angular/core';

@Component({
  // By using this we register a custom tag for this component
  selector: 'app-root',

  // By using this we define what is a view of this component i.e. "app.component.html"
  templateUrl: './app.component.html',

  // By using this we define what is style we want to apply to this component i.e. "app.component.css"
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstNgApp';
}
