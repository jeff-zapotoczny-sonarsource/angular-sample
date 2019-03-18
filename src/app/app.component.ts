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

  public foo(a: boolean, b: boolean) {
    if (a) {
      console.log('a!');
    } if (b) {
      console.log('b!');
    }
    let i = 0;
    i = i++;
  }
}
