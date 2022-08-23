import { Component } from '@angular/core';

@Component({
  // the selector can use element or attribute form

  // this is element vvv
  selector: 'app-root',

  // this is the syntax for setting up the selector as an attribute
  // selector: '[app-root]',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: red;
    }
  `]
})
export class AppComponent {
  name = "Thom";
}
