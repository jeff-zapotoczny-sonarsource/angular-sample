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
    try {
      for (let i = 0; i < 50; i++) {
        console.log('looping for no good reason');
      }
      alert("I did other stuff");
    } catch (e) {
      throw e;
    }
  }
}
