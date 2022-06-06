import { Component, OnInit } from '@angular/core';
import { DropRightAnimation } from '../../animations/DropRightAnimation';
import { OverlayAnimation } from '../../animations/OverlayAnimation';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [DropRightAnimation, OverlayAnimation],
})
export class NavBarComponent implements OnInit {
  menuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  handleNavBar() {
    this.menuOpen = !this.menuOpen;
  }
  handleNavBtnAnimation() {}
}
