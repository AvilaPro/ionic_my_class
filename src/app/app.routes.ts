import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: () => import('./products/products.page').then( m => m.ProductsPage)
      },
      {
        path: 'wallet',
        loadComponent: () => import('./wallet/wallet.page').then( m => m.WalletPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
      },
    ]
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
];
