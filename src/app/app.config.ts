import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration, withEventReplay, withIncrementalHydration } from '@angular/platform-browser';
import { routes } from './routes';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { mockApiInterceptor } from '@core/services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZonelessChangeDetection(),
    provideAnimations(),
    provideHttpClient(
      withFetch(), // Enable fetch API for better SSR support
      withInterceptors([mockApiInterceptor])
    ),
    // Enable client hydration with incremental support and event replay
    provideClientHydration(
      withEventReplay(),
      withIncrementalHydration()
    ),
    importProvidersFrom(
      LayoutModule,
      FormsModule,
      ReactiveFormsModule,
      NgScrollbarModule
    ),
  ]
};