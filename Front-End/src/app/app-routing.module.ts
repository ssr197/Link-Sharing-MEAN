import { Routes } from '@angular/router';
import { LsHomeComponent } from './components/ls-home/ls-home.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';


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
  {
    path: 'credit-card-details',
    component: CreditCardComponent,
    // canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
