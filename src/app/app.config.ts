import {
  ApplicationConfig,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { ApiInterceptor } from './utils/http';
import { provideStore } from '@ngrx/store';

export const apiInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),
    apiInterceptorProvider,
    provideStore(),
    provideAnimations()
],
};
