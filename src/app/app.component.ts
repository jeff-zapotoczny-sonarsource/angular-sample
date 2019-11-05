import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample';

  doStuff() {
    alert("I did stuff");
  }

  doOtherStuff() {
    alert("I did other stuff");
  }
}
