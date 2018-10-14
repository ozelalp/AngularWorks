import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ProjectsComponent } from './projects/projects.component';
import { AttributeSampleComponent } from './attribute-sample/attribute-sample.component';
import { ClassSampleComponent } from './class-sample/class-sample.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPreviewComponent,
    ProjectsComponent,
    AttributeSampleComponent,
    ClassSampleComponent,
    StringInterpolationComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  projectCounter = 0;
}
