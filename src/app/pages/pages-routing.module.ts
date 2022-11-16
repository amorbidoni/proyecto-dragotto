import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'navigation',
        component: NavigationComponent,
        data: { animation: 'HomePage' },
      },
      {
        path: 'proyects',
        component: ProyectsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
        // data: { animation: 'ContactPage' },
      },
      {
        path: '**',
        redirectTo: 'main/navigation',
      },
    
    ],
  },
  {
    path: '**',
    redirectTo: 'main/navigation',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
