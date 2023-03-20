import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DropRightAnimation } from '../../animations/DropRightAnimation';
import { OverlayAnimation } from '../../animations/OverlayAnimation';
import { NavBarService } from '../../services/nav-bar.service';
import { navBarLinks } from '../../interfaces/navBarLinks';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [DropRightAnimation, OverlayAnimation],
})
export class NavBarComponent implements OnInit, OnDestroy {
  @Input() navTabletVisible: boolean = true;
  @Input() isColorWhite: boolean = false;
  @Input() isColumn:boolean = false;
  @Input() mobileType:boolean = true;
  public navBarLinks: navBarLinks[] = this.navBarService.getNavBarLinks;
  public routeSub !:Subscription;
  private filterParam !:string;
  public linkClass:string = '';
  menuOpen: boolean = false;
  constructor(private navBarService : NavBarService, 
              private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.filterParam = params['filter'] || null;
    });
  }

  handleNavBar() {
    this.menuOpen = !this.menuOpen;
  }
  handleNavBtnAnimation() {}

  getAcvtiveLinkClass(filtersParams?:string){
    
    if(filtersParams && this.filterParam === filtersParams){
      this.linkClass = 'active-link' 
    }
    if(this.isColorWhite){
      this.linkClass = `${this.linkClass} line line-white`
    }else{
       this.linkClass = `${this.linkClass} line line-black`
    } 
    return this.linkClass;   
  }


}
