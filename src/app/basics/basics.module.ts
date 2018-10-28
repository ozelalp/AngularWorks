import { Component, OnInit, NgModule } from '@angular/core';
import { ProjectPreviewComponent } from './selectorTypes/project-preview/project-preview.component';
import { ProjectsComponent } from './selectorTypes/projects/projects.component';
import { AttributeSampleComponent } from './selectorTypes/attribute-sample/attribute-sample.component';
import { ClassSampleComponent } from './selectorTypes/class-sample/class-sample.component';
import { StringInterpolationComponent } from './bindings/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding/two-way-binding.component';
import { NgIfTestComponent } from './directives/ng-if-test/ng-if-test.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        ProjectPreviewComponent,
        ProjectsComponent,
        AttributeSampleComponent,
        ClassSampleComponent,
        StringInterpolationComponent,
        PropertyBindingComponent,
        EventBindingComponent,
        TwoWayBindingComponent,
        NgIfTestComponent,
        NgSwitchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        ProjectPreviewComponent,
        ProjectsComponent,
        AttributeSampleComponent,
        ClassSampleComponent,
        StringInterpolationComponent,
        PropertyBindingComponent,
        EventBindingComponent,
        TwoWayBindingComponent,
        NgIfTestComponent,
        NgSwitchComponent
    ],
})

export class BasicsModule { }