import { Component, Input, OnInit } from '@angular/core';
import { DropRightAnimation } from '../../animations/DropRightAnimation';
import { OverlayAnimation } from '../../animations/OverlayAnimation';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [DropRightAnimation, OverlayAnimation],
})
export class NavBarComponent implements OnInit {
  @Input() alwaysVisible: boolean = true;
  @Input() navTabletVisible: boolean = true;
  menuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.alwaysVisible ? (this.menuOpen = true) : (this.menuOpen = false);
  }

  handleNavBar() {
    this.menuOpen = !this.menuOpen;
  }
  handleNavBtnAnimation() {}
  navBarLinks = [
    {
      name: 'INICIO',
      route: ['/main', 'navigation'],
    },
    {
      name: 'Proyectos',
      route: ['/main', 'proyects'],
    },
    // {
    //   name: 'PROYECTOS',
    //   route: ['/path'],
    // },
    {
      name: 'CONTACTO',
      route: ['/main', 'contact'],
    },
  ];
}
