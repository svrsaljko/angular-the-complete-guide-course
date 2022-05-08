import { Component } from '@angular/core'; // importana core funkcionalnost

// typescript dekorator za klasu koji oznacava da je klasa komponenta
@Component({
  // objekt koji govori angularu kako ce se zvati html tag komponente i gdje se nalazi
  //
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 9;
  serverStatus: string = 'online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerId(): number {
    return this.serverId;
  }
  getserverStatus(): string {
    return this.serverStatus;
  }

  getColor = (): string => (this.serverStatus === 'online' ? 'green' : 'red');
}
