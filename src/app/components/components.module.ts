import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';

import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ArrowBackComponent } from './arrow-back/arrow-back.component';

@NgModule({
  declarations: [ CarouselComponent, ModalComponent, ArrowBackComponent],
  imports: [CommonModule, RouterModule],
  exports: [CarouselComponent, ArrowBackComponent, ModalComponent ],
})
export class ComponentsModule {}
