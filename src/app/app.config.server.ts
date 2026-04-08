import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { serverRoutes } from './server.routes';
import { provideClientHydration, withEventReplay, withIncrementalHydration } from '@angular/platform-browser';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    // Enable hydration with incremental support
    provideClientHydration(
      withEventReplay(),
      withIncrementalHydration()
    ),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);