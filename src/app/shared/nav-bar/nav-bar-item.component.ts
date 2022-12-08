import { Component, Input, OnInit } from '@angular/core';
import { navBarLinks } from 'src/app/interfaces/navBarLinks';

@Component({
  selector: 'app-nav-bar-item',
  styleUrls: ['./nav-bar.component.scss'],
  template: `
    <a
      [routerLink]="link.route"
      [queryParams]=" link.fitlerParams ? { filter : link.fitlerParams} : null " 
      [style.color]="isColorWhite ? 'white' : 'inherit'"
      [class]="isColorWhite ? 'line line-white' : 'line line-black'">

      <span>{{ link.name }}</span><b>{{link.nameBold}}</b>
    </a>
  `
})
export class NavBarItemComponent implements OnInit {
  @Input() link!:navBarLinks;
  @Input() isColorWhite:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
