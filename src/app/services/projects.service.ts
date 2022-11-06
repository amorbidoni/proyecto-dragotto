import { Injectable } from '@angular/core';
import { Projects } from '../models/projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  proyects: Projects[] = [
    {
      id: '1',
      imgeUrl: '../../../assets/proyects/casa-1.jpg',
      name: 'casa 1',
    },
    {
      id: '2',
      imgeUrl: '../../assets/proyects/colectiva2.jpg',
      name: '',
    },
    {
      id: '2',
      imgeUrl: '../../assets/proyects/proyects-01.jpg',
      name: '',
    },
    {
      id: '3',
      imgeUrl: '../../assets/proyects/institucional.jpg',
      name: '',
    },
    {
      id: '4',
      imgeUrl: '../../assets/proyects/DIE-DOC-Frente-MetalAbierto_01.jpg',
      name: '',
    },
    {
      id: '4',
      imgeUrl: '../../assets/proyects/proyects-02.jpg',
      name: '',
    },
    {
      id: '5',
      imgeUrl: '../../assets/proyects/comercial3.jpg',
      name: '',
    },
    {
      id: '6',
      imgeUrl: '../../assets/proyects/chapaII.jpg',
      name: '',
    },
    {
      id: '7',
      imgeUrl: '../../assets/proyects/proyects-03.jpg',
      name: '',
    },
    {
      id: '7',
      imgeUrl: '../../assets/proyects/canasto.png',
      name: '',
    },
  ];
  getAllProyects() {
    return this.proyects;
  }
  constructor() {}
}
