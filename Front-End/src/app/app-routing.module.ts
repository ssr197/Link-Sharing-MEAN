import { Routes } from '@angular/router';
import { LsHomeComponent } from './components/ls-home/ls-home.component';


export const routes: Routes = [
  {
    path: '',
    component: LsHomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: LsHomeComponent,
    // canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
