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
  @Input() isColorWhite: boolean = false;
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
      name: 'inicio',
      nameBold:'',
      route: ['/main', 'navigation'],
    },
    {
      name: 'arquitectura',
      nameBold:'',
      route: ['/main', 'proyects'],
    },
    {
      name: 'de',
      nameBold:'madera',
      route: ['/main', ''],
    },
    {
      name: 'investigación',
      nameBold:'',
      route: ['/main', ''],
    },
    {
      name: 'economía',
      nameBold:'circlar',
      route: ['/main', ''],
    },
    {
      name: 'cooperativa',
      nameBold:'hormiga',
      route: ['/main', ''],
    },
    {
      name: 'todo',
      nameBold:'',
      route: ['/main', ''],
    },
    {
      name: 'construido',
      nameBold:'',
      route: ['/main', ''],
    },
    {
      name: 'en',
      nameBold:'equipo',
      route: ['/main', ''],
    },
    // {
    //   name: 'PROYECTOS',
    //   route: ['/path'],
    // },
    {
      name: 'CONTACTO',
      nameBold:'',
      route: ['/main', 'contact'],
    },
  ];
}
