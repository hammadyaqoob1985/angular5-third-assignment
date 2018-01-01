import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = true;
  buttonClicks = [];

  canDisplayDetails() {
    this.buttonClicks.push(new Date());
    return this.displayDetails === true ? this.displayDetails = false : this.displayDetails = true;
  }
}
