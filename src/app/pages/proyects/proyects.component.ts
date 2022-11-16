import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ProyectsService } from '../../services/proyects.service';
import { Projects } from '../../models/projects.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QueryList } from '@angular/core';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent implements OnInit, OnDestroy {

  @ViewChildren('project') projectQueryList!: QueryList<ElementRef>;
  @ViewChild('container') container!: ElementRef;

  constructor(private ProyectsService: ProyectsService) {}
  
  ngOnDestroy(): void {
    ScrollTrigger.disable();
  }
  
  
  projects: Projects[] = []
  ngOnInit() {
    this.projects = this.ProyectsService.getAllProyects();
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      console.log()
      ScrollTrigger.enable();
      ScrollTrigger.refresh();
      this.startScrollTriggerAnimation();
      this.scaleAnimation();
    }, 1);
 
  }



  startScrollTriggerAnimation(){
    let projectsContainers = this.projectQueryList.map(item =>item.nativeElement);
    let container: any = this.container.nativeElement;
    gsap.to(projectsContainers, {
      xPercent: -100 * (projectsContainers.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.projects__container',
        pin: true,
        scrub: 1,
        snap: 1 / (projectsContainers.length - 1),
        start: 'top 100px',
        end:()=> '+=' + container.offsetWidth,
        // markers:true,
      },
    });
  }
  scaleAnimation(){
   
    
    gsap.to('#project-4', {
      scrollTrigger:{
       trigger:'#project-4',
        scrub:1,
        start:'center 36%',
        end:'bottom 100px',
        markers:true
      },
      scale:2,
      margin:'200px',
      y:'-50px'
    });
 
  }



}

