import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  name = 'Alper';
  surName = 'Özel';

  getFullName(): string {
    return `${this.name} ${this.surName}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
