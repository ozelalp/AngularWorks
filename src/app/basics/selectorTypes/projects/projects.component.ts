import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  // template: ` <div>
  // <app-project-preview></app-project-preview>
  // </div>
  // `,
  styleUrls: ['./projects.component.css']
// styles:[`
// .projects{
//   margin: 10,10;
//   padding-top: 3pc;
// }
// `]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
