import { Component, Input, OnInit } from '@angular/core';
import { DropRightAnimation } from '../../animations/DropRightAnimation';
import { OverlayAnimation } from '../../animations/OverlayAnimation';
import { NavBarService } from '../../services/nav-bar.service';
import { navBarLinks } from '../../interfaces/navBarLinks';

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
  menuOpen: boolean = false;
  constructor(private navBarService : NavBarService) {}

  ngOnInit(): void {
    this.alwaysVisible ? (this.menuOpen = true) : (this.menuOpen = false);
  }

  handleNavBar() {
    this.menuOpen = !this.menuOpen;
  }
  handleNavBtnAnimation() {}


}
