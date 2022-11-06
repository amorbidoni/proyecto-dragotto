import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ProyectsService } from '../../services/proyects.service';
import { Projects } from '../../models/projects.model';
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
  
  }

  projects: Projects[] = []
  @ViewChild('container') container!: ElementRef;
  ngOnInit() {
    this.projects = this.ProyectsService.getAllProyects();
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      console.log(gsap.utils.toArray('.project'))
      
    }, 1);
    console.log(gsap.utils.toArray('.project'))
  }



  startScrollTriggerAnimation(){

    let projects = gsap.utils.toArray('.project');
    let container: any = document.querySelector('.proyects__container')!;
    
    gsap.to(projects, {
      xPercent: -100 * (this.projects.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.proyects__container',
        pin: true,
        scrub: 1,
        snap: 1 / (this.projects.length - 1),
        start: '-100px',
        end: () => '+=' + container.offsetHeight,
      },
    });



  }




}

