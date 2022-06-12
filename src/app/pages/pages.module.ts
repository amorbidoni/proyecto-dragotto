import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';
import { ProyectsComponent } from './proyects/proyects.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProyectItemComponent } from './proyects/proyectItem.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    MainComponent,
    ProyectsComponent,
    NavigationComponent,
    ProyectItemComponent,
    ContactComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, ComponentsModule],
  exports: [MainComponent],
})
export class PagesModule {}
