import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  selectedIndex: number;
  employeeList: any[] = [
    {
      id: 1,
      name: 'Alper',
      surName: 'Özel'
    },
    {
      id: 2,
      name: 'Sertac',
      surName: 'Eker'
    },
    {
      id: 3,
      name: 'Mustafa',
      surName: 'Karahan'
    },
    {
      id: 4,
      name: 'Emin',
      surName: 'Özel'
    },
    {
      id: 5,
      name: 'Mustafa',
      surName: 'Öztürk'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getName(emp: any): string {
    return `${emp.name} ${emp.surName}`;
  }

  setActive(eventArg: any, emp: any) {
    // select/desect active item, can be more than one active item
    // const isActive: boolean = eventArg.target.classList.contains('active');
    // if (isActive) {
    //   eventArg.target.classList.remove('active');
    // } else {
    //   eventArg.target.classList.add('active');
    // }

    // sets only one active item, clears previous active first
    const allItems = eventArg.target.parentElement.children;
    for (const item of allItems) {
      item.classList.remove('active');
    }

    eventArg.target.classList.add('active');
  }

  setActiveIndex(eventArg: any, emp: any) {
    this.selectedIndex = emp.id;
  }

  getAltColor(id: number) {
    if (id % 2 === 1) {
      return 'hotpink';
    } else {
      return 'cornflowerblue';
    }
  }
}
