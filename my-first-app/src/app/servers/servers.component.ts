import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  // OSTALI SELECTORI

  // selector: '.app-servers',

  //selector: '[app-servers]',
  // primjer selektora za html tag
  //       <div app-servers></div>

  // selector: '.app-servers',
  // primjer selektora za css tag
  // <div class="app-servers"></div>

  templateUrl: './servers.component.html',
  // template ili templateUrl svejedno ali jedno od toga je nuzno
  // template: `<app-server></app-server> <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'Server was not created!';
  serverName: string = 'Testsever';
  userName: string = '';
  serverCreated: boolean = false;
  servers: string[] = ['Testsever', 'Testsever2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onServerCreation() {
    this.serverCreationStatus =
      'Server successfuly created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    console.log('server event: ', event);
    // target je HTML element i moramo castati da ga typescript prepozna
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
