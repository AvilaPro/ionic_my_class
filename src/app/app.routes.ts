import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'users',
    loadComponent: () => import('./admin/users/users.page').then( m => m.UsersPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./loginRegister/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'nav',
    loadComponent: () => import('./nav/nav.page').then( m => m.NavPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
