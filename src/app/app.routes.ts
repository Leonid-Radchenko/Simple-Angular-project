import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: '', 
    component: MainPageComponent
  },
  { path: 'contacts', 
    component: ContactPageComponent
  },
  { path: 'products/:id',
    component: ProductDetailsComponent
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
