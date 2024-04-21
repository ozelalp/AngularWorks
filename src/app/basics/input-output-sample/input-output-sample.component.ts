import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-sample',
  templateUrl: './input-output-sample.component.html',
  styleUrls: ['./input-output-sample.component.css']
})
export class InputOutputSampleComponent implements OnInit {
  @Input() name: string;
  @Input() surName: string;
  @Output() innerEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.innerEvent.emit('Test Value');
  }
}
