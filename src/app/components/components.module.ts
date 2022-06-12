import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent, CarouselComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, CarouselComponent, FooterComponent],
})
export class ComponentsModule {}
