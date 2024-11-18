import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', 
    component: MainPageComponent
  },
  { path: 'contacts', 
    component: ContactPageComponent
  },
];
