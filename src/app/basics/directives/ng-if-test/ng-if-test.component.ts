import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-test',
  templateUrl: './ng-if-test.component.html',
  styleUrls: ['./ng-if-test.component.css']
})
export class NgIfTestComponent implements OnInit {

  public checkBool = false;
  public buttonCap = 'Hide Paragraph';

  constructor() { }

  ngOnInit() {
  }

  changeCheckBool() {
    if (this.checkBool) {
      this.checkBool = false;
      this.buttonCap = 'Hide Paragraph';
      } else {
      this.checkBool = true;
      this.buttonCap = 'Show Paragraph';
      }
  }

}
