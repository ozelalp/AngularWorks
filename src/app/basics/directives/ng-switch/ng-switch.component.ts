import { Component, OnInit } from '@angular/core';
import { SwitchCondition } from 'src/app/shared/enumTypes';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  public switchConditionEnum = SwitchCondition;
  public switchCondition: SwitchCondition = SwitchCondition.None;
  public testCond = 1;

  constructor() { }

  ngOnInit() {
    console.log(this.switchCondition);
  }

}
