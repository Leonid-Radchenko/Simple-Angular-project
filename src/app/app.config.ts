import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withNavigationErrorHandler, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withNavigationErrorHandler(error => {
        console.error('Navigation error:', error);
      })
    ),
    provideHttpClient(withFetch()),
  ]
};
