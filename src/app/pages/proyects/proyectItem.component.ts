import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../models/projects.model';

@Component({
  selector: 'app-proyect-item',
  templateUrl: './proyectItem.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectItemComponent implements OnInit {
  @Input() project!: Projects
  constructor() {}

  ngOnInit(): void {}
}
