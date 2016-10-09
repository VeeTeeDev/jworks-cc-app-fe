// - Routes instead of RouteConfig & RouterModule instead of provideRoutes New version
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list';
import { ContactDetailComponent } from './contact-detail';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },
  {
    path: 'contact/:id',
    component: ContactDetailComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
