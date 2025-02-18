import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',
    loadComponent: () => import('./main-page/main-page.component').then(m => m.MainPageComponent)
  },
  { path: 'contacts', 
    loadComponent: () => import('./contact-page/contact-page.component').then(m => m.ContactPageComponent)
  },
  { path: 'products/:id',
    loadComponent: () => import('./product-details/product-details.component').then(m => m.ProductDetailsComponent)
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];