import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../models/projects.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import SwiperCore, { FreeMode, Navigation, Thumbs, SwiperOptions } from "swiper";
import { FilterService } from '../../services/filter.service';
import { FitlerParams } from '../../interfaces/navBarLinks';
import { DomSanitizer } from '@angular/platform-browser';
// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  public project!:Projects;
  public projectId!:string;
  public routeSub!:Subscription;
  public selectedFilterSub!:Subscription;
  public selectedFilter!:FitlerParams;
  public loading:boolean = true;
  public loadingVideo:boolean = true;
  thumbsSwiper: any;
  constructor(private projectService : ProjectsService,
              private route: ActivatedRoute,
              private filterService : FilterService,
               private _sanitizer: DomSanitizer

               ) { 
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.selectedFilterSub.unsubscribe();
  }

              
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.projectId = params['id'];
      this.getProject(this.projectId);
    });
    this.selectedFilterSub = this.filterService.selectedFilter$.subscribe(
      res=> {
        this.selectedFilter = res;
      
      }
    )
  }

  getProject(id:string){
      this.projectService.getAllProjectsFirestore().subscribe(res=>{
      this.project = res.find((item:any)=>item.id === id);
      this.loading = true;
      console.log(this.project)
      // this.videoIframeStr = this.project.videos![0] 
   })
  }
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

getVideoIframe(url:string) {
    let video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

}

