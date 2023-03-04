import { Component, Input, OnInit } from '@angular/core';
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
export class NavBarComponent implements OnInit {
  @Input() alwaysVisible: boolean = true;
  @Input() navTabletVisible: boolean = true;
  @Input() isColorWhite: boolean = false;
  public navBarLinks: navBarLinks[] = this.navBarService.getNavBarLinks;
  private routeSub !:Subscription;
  private filterParam !:string;
  public linkClass:string = '';
  menuOpen: boolean = false;
  constructor(private navBarService : NavBarService, 
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.alwaysVisible ? (this.menuOpen = true) : (this.menuOpen = false);
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
