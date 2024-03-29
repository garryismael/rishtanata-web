import { Routes } from '@angular/router';
import { AuthComponent } from './components/shared/auth/auth.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { authGuard } from './guards/auth.guard';
import { EmailNotifyComponent } from './pages/email-notify/email-notify.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PreferenceComponent } from './pages/preference/preference.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProposalComponent } from './pages/proposal/proposal.component';
import { SearchComponent } from './pages/search/search.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import path from 'path';
import { ProfileGeneralComponent } from './pages/profile/profile-general/profile-general.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    redirectTo: 'auth/sign-up',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
        children: [
          {
            path: '',
            component: ProfileGeneralComponent,
          },
          {
            path: 'edit',
            component: EditProfileComponent
          }
        ],
      },
      {
        path: 'email-notify',
        component: EmailNotifyComponent,
      },
      {
        path: 'email-verify/:token',
        component: EmailVerificationComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'proposals',
        component: ProposalComponent,
      },
      {
        path: 'preferences',
        component: PreferenceComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
