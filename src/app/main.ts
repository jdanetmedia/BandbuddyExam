import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { ApplicationRef } from "@angular/core";

let platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule).then((module) => {
  let application = module.injector.get(ApplicationRef);
});
