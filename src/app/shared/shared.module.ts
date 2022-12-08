import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// 
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarItemComponent } from './nav-bar/nav-bar-item.component';



@NgModule({
  declarations: [NavBarComponent, FooterComponent, NavBarItemComponent],
  imports: [ CommonModule, RouterModule ],
  exports:[NavBarComponent, FooterComponent]
})
export class SharedModule { }
