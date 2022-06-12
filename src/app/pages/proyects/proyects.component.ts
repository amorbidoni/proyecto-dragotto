import { Component, OnInit } from '@angular/core';
import { ProyectsService } from '../../services/proyects.service';
import { ProyectsInterface } from '../../models/proyects.model';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent implements OnInit {
  constructor(private ProyectsService: ProyectsService) {}

  proyects: ProyectsInterface[] = this.ProyectsService.getAllProyects();

  ngOnInit(): void {}
}
