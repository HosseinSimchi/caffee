import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { routes } from "./root.routes";
import { provideStore } from '@ngrx/store';

export const rootConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore()
],
};
