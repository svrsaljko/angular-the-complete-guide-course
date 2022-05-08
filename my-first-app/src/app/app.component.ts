import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  // styleUrls: ['./app.component.css'],
  // nacini za dodavanje css stilova
  styles: [
    `
      h3 {
        color: purple;
      }
    `,
  ],
})
export class AppComponent {}
