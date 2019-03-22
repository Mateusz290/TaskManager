import { NgModule } from '@angular/core';

// Wczytaj moduł zawierający podstawowe dyrektywy.
import {CommonModule} from '@angular/common';

// Wczytaj komponenty.
import {Checkbox} from './checkbox/checkbox';
import {Toggle} from './toggle/toggle';

// Utwórz moduł listy zadań.
@NgModule({
  declarations: [Checkbox, Toggle],
  imports: [CommonModule],
  exports: [Checkbox, Toggle]
})
export class UIModule {}
