import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'projects',
        component: ProyectsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'project-detail/:id',
        component: ProjectDetailComponent,
      },
      {
        path: '**',
        redirectTo: 'navigation',
      },
      
    ],
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: '**',
    redirectTo: 'navigation',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
