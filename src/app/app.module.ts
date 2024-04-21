import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BasicsModule } from './basics/basics.module';
import { ServiceSampleService } from './services/service-sample.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BasicsModule, BrowserModule, FormsModule],
  providers: [ServiceSampleService],
  bootstrap: [AppComponent],
})
export class AppModule {
  projectCounter = 0;
}
