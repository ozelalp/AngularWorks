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
    setTimeout( () => {
      this.allowClick = true;
      this.buttonName = 'Enabled';
    }, 3000);
  }

  ngOnInit() {
  }

  writeChangeStatus() {
    console.log('====================================');
    console.log(`Status : ${this.allowClick}`);
    console.log('====================================');
    this.allowClick = false;
    this.buttonName = 'Disabled';
  }
}
