import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSampleService {

  constructor() { }

  logMessage(msg: string) {
    console.log(msg);
  }
}
