import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
  ],
  exports: [MainComponent],
})
export class PagesModule {}
