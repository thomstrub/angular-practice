import { Component, OnInit } from '@angular/core';

@Component({

  // selector: 'app-servers',

  // this is the syntax for setting up the selector as an attribute
  // selector: '[app-servers]',

  //this is the syntax for setting up the selector as a class selector
  selector: '.app-servers',

  // you can use a templateUrl or a template
  templateUrl: './servers.component.html',
  //use back-ticks for multi-line
  // template: '<app-server></app-server><app-server></app-server>',
//   template: `
//   <app-server></app-server>
//   <app-server></app-server>
// `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
