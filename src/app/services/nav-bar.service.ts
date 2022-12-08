import { Injectable } from '@angular/core';
import { navBarLinks } from '../interfaces/navBarLinks';


@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor() { }
  navBarLinks:navBarLinks[] = [
    {
      name: 'inicio',
      nameBold:'',
      route: ['/main', 'navigation'],
    },
    {
      name: 'arquitectura',
      nameBold:'',
      route: ['/main', 'projects'],
      fitlerParams:'arquitectura'
    },
    {
      name: 'de',
      nameBold:'madera',
      route: ['/main', 'projects'],
      fitlerParams:'demadera'
    },
    {
      name: 'investigación',
      nameBold:'',
      route: ['/main', 'projects'],
      fitlerParams:'investigacion'
    },
    // {
    //   name: 'economía',
    //   nameBold:'circular',
    //   route: ['/main', 'projects'],
    //   fitlerParams:'economia'
    // },
    {
      name: 'cooperativa',
      nameBold:'hormiga',
      route: ['/main', 'projects'],
      fitlerParams:'cooperativahormiga'
    },
    {
      name: 'todo',
      nameBold:'',
      route: ['/main', 'projects'],
      fitlerParams:'todo'
    },
    // {
    //   name: 'construido',
    //   nameBold:'',
    //   route: ['/main', 'projects'],
    //   fitlerParams:'construido'
    // },
    {
      name: 'en',
      nameBold:'equipo',
      route: ['/main', 'projects'],
      fitlerParams:'enequipo'
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
  get getNavBarLinks(){
    return this.navBarLinks;
  }
}
