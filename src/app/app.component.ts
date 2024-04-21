import { Component } from '@angular/core';
import { ServiceSampleService } from './services/service-sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly serSample: ServiceSampleService) {
  }

  eventHandler(value: string) {
    // console.log(value);
    this.serSample.logMessage(value);
  }
}
