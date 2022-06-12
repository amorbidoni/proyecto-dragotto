import { Component, Input, OnInit } from '@angular/core';
import { ProyectsInterface } from '../../models/proyects.model';

@Component({
  selector: 'app-proyect-item',
  templateUrl: './proyectItem.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectItemComponent implements OnInit {
  @Input() proyect: ProyectsInterface = new ProyectsInterface();
  constructor() {}

  ngOnInit(): void {}
}
