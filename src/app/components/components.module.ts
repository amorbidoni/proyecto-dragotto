import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';

import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ CarouselComponent, ModalComponent],
  imports: [CommonModule, RouterModule],
  exports: [CarouselComponent],
})
export class ComponentsModule {}
