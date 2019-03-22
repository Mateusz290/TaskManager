// Najpierw zaimportuj wymagane zależności zapewniające zgodność wsteczną.
import 'zone.js';
import 'reflect-metadata';

// Zaimportuj funkcję uruchamiania Angulara.
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// Zaimportuj główny moduł.
import { AppModule } from './app.module';

// Uruchamiamy Angular używając głównego modułu aplikacyjnego.
platformBrowserDynamic().bootstrapModule(AppModule);
