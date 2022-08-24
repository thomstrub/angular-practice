import { Component, OnInit} from '@angular/core';

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
export class ServersComponent  implements OnInit{
  allowNewServer = false;

  serverCreationStatus = "No Server was created.";
  serverName="Testing for Testing";
  userName="";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 1'];
  
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
      
  }

  onCreateServer(){
    // this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.serverCreated = !this.serverCreated;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
    console.log(this.serverName);
  }

  onResetUsername(){
    this.userName="";
  }

}
