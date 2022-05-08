import { Component } from '@angular/core';

@Component({
  selector: '[app-final-assignment]',
  templateUrl: './final-assignment.component.html',
  styles: [
    `
      .text-color {
        color: white;
      }
    `,
  ],
})
export class FinalAssignmentComponent {
  showDetails: boolean = false;
  counter = 0;

  onDisplayDetailsClick = () => {
    this.showDetails = !this.showDetails;
    this.counter++;
  };
}
