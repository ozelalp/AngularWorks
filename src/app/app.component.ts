import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWorks';
  name = 'Alper';
  surName = '';

  logFullName() {
    console.log(`Name: $(name), Surname: $(surName)`);
  }
}
