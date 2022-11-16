import { Injectable } from '@angular/core';
import { Projects } from '../models/projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  proyects: Projects[] = [
    {
      id: '1',
      imgeUrl: '../../../assets/projects/01_sara.jpg',
      name: 'casa 1',
    },
    {
      id: '2',
      imgeUrl: '../../assets/projects/02_mural.jpg',
      name: '',
    },
    {
      id: '2',
      imgeUrl: '../../assets/projects/03_tau.jpg',
      name: '',
    },
    {
      id: '3',
      imgeUrl: '../../assets/projects/04_pasaje.jpg',
      name: '',
    },
    {
      id: '4',
      imgeUrl: '../../assets/projects/06_basu.jpg',
      name: '',
    },
    {
      id: '11',
      imgeUrl: '../../assets/projects/07_docta.jpg',
      name: '',
    },
    {
      id: '5',
      imgeUrl: '../../assets/projects/08_rock.jpg',
      name: '',
    },
    {
      id: '6',
      imgeUrl: '../../assets/projects/09_alto.jpg',
      name: '',
    },
    {
      id: '7',
      imgeUrl: '../../assets/projects/10_cbatur.jpg',
      name: '',
    },
    {
      id: '8',
      imgeUrl: '../../assets/projects/11_ecoba.png',
      name: '',
    },
    {
      id: '9',
      imgeUrl: '../../assets/projects/19_paraguas.JPG',
      name: '',
    },
    {
      id: '10',
      imgeUrl: '../../assets/projects/20_copaca.jpg',
      name: '',
    },
    {
      id: '10',
      imgeUrl: '../../assets/projects/21_caranday.jpeg',
      name: '',
    },
    {
      id: '10',
      imgeUrl: '../../assets/projects/22_cach.jpeg',
      name: '',
    },
    {
      id: '10',
      imgeUrl: '../../assets/projects/23_mdpi.jpg',
      name: '',
    },
    {
      id: '10',
      imgeUrl: '../../assets/projects/24_futur.jpg',
      name: '',
    },
    {
      id: '10',
      imgeUrl: '../../assets/projects/27_lumi.jpg',
      name: '',
    },
    {
      id: '10',
      imgeUrl: '../../assets/projects/28_semi.jpg',
      name: '',
    },
 
  ];
  getAllProyects() {
    return this.proyects;
  }
  constructor() {}
}
