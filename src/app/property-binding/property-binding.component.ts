import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  allowClick = false;
  buttonName = 'Disabled';

  constructor() {
    this.setTimer();
  }

  setTimer() {
    setTimeout(() => {
      console.log('====================================');
      console.log('Enabling...');
      this.allowClick = true;
      this.buttonName = 'Enabled';
      console.log(`Button Status : ${this.allowClick}`);
      console.log('====================================');
    }, 3000);
  }

  ngOnInit() {
  }

  writeChangeStatus() {
    console.log('====================================');
    console.log('Disabling...');
    this.allowClick = false;
    this.buttonName = 'Disabled';
    console.log(`Button Status : ${this.allowClick}`);
    console.log('====================================');

    this.setTimer();
  }
}
