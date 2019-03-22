// Potrzebujemy dekoratora Component oraz wyliczenia ViewEncapsulation.
import {Component, ViewEncapsulation} from '@angular/core';

// Za pomocą wczytywania tekstowego możemy zaimportować szablon.
import template from './app.html!text';

// W ten sposób tworzymy główną treść aplikacji.
@Component({
  // Informuje Angular, aby szukał elementu <ngc-app> w celu utworzenia tego komponentu.
  selector: 'ngc-app',
  // Wykorzystajmy treść wczytanego szablonu HTML.
  template,
  // Poinformuj Angular, aby ignorował enkapsulację widoku.
  encapsulation: ViewEncapsulation.None
})
export class App {}
