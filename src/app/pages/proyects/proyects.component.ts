import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ProyectsService } from '../../services/proyects.service';
import { ProyectsInterface } from '../../models/proyects.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent implements OnInit, AfterViewInit {
  constructor(private ProyectsService: ProyectsService) {}
  ngAfterViewInit(): void {
    let projects = gsap.utils.toArray('.project');
    let container: any = document.querySelector('.proyects__container')!;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(projects, {
      xPercent: -100 * (this.proyects.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.proyects__container',
        pin: true,
        scrub: 1,
        snap: 1 / (this.proyects.length - 1),
        start: '-100px',
        end: () => '+=' + container.offsetHeight,
      },
    });
  }

  proyects: ProyectsInterface[] = this.ProyectsService.getAllProyects();
  @ViewChild('container') container!: ElementRef;
  ngOnInit() {}
}
