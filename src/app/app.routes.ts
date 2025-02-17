import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

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