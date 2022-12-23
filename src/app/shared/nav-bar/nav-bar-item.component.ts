import { Component, Input, OnInit } from '@angular/core';
import { navBarLinks } from 'src/app/interfaces/navBarLinks';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-nav-bar-item',
  styleUrls: ['./nav-bar.component.scss'],
  template: `
    <a
      [routerLink]="link.route"
      [queryParams]=" link.fitlerParams ? { filter : link.fitlerParams} : null " 
      [style.color]="isColorWhite ? 'white' : 'inherit'"
      [class]="isColorWhite ? 'line line-white' : 'line line-black'"
      (click)="selectFilter()">

      <span>{{ link.name }}</span><b>{{link.nameBold}}</b>
    </a>
  `
})
export class NavBarItemComponent implements OnInit {
  @Input() link!:navBarLinks;
  @Input() isColorWhite:boolean = true;

  constructor(private filterService : FilterService) { }

  ngOnInit(): void {
  }
  selectFilter(){
    this.link.fitlerParams 
      ? this.filterService.selectFilter(this.link.fitlerParams)
      : this.filterService.selectFilter('todo'); 
  }
}
