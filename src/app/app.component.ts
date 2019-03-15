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

  public doOtherStuff() {
    var a = [1, 2, 3];
    var b = a.reverse(); // Noncompliant
  }

}
