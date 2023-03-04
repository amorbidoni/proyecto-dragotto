import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../models/projects.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetector } from '../../services/device-detector.service';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent implements OnInit, OnDestroy {

  @ViewChildren('project') projectQueryList!: QueryList<ElementRef>;
  @ViewChild('container') container!: ElementRef;

  constructor(private projectsService: ProjectsService,
              private route: ActivatedRoute,
              private deviceDetector: DeviceDetector
              ) {}
  
  ngOnDestroy(): void {
    ScrollTrigger.disable();
  }
  
  screenWidth!:number;
  @HostListener('window:resize', ['$event'])
  onResize(event?:any) {
    this.screenWidth = window.innerWidth;
    this.getProjects();
  }
  
  projects: Projects[] = []
  filterParam!: 'demadera' | 'arquitectura' | 'investigacion' | 'cooperativahormiga' | 'todo' |  'enequipo' | null;
  ngOnInit() {
    this.onResize();
    this.route.queryParams.subscribe(params => {
      this.filterParam = params['filter'] || null;
      this.getProjects();
    });
    gsap.registerPlugin(ScrollTrigger);
    this.getProjects();
  }

  getProjects(){
    this.projectsService.getAllProjectsFirestore().subscribe(res=>{
      this.projects = res;
      if(this.filterParam){
        this.filterProjects(this.filterParam);
      }
      if(this.deviceDetector.isMobile || this.screenWidth < 1020) return;
      setTimeout(() => {
        ScrollTrigger.enable();
        ScrollTrigger.refresh();
        this.startScrollTriggerAnimation();
      }, 1);
    })
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
  filterProjects(filterParam:string){
    this.projects = this.projects.filter(item=>(item.filters?.includes(filterParam)));
  }
}

