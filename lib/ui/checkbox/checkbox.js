import {Component, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import template from './checkbox.html!text';

@Component({
  selector: 'ngc-checkbox',
  host: {
    class: 'checkbox'
  },
  template,
  encapsulation: ViewEncapsulation.None
})
export class Checkbox {
  // Opcjonalna etykieta, którą można nadać opcji.
  @Input() label;
  // Informacja, czy opcja jest włączona, czy wyłączona.
  @Input() checked;
  // Emiter zdarzeń, gdy dochodzi do zmiany stanu zaznaczenia. Korzysta z konwencji odnoszącej się dowiązania dwukierunkowego [(checked)].
  @Output() checkedChange = new EventEmitter();

  // Ta funkcja spowoduje zgłoszenie zdarzenia.
  onCheckedChange(checked) {
    this.checkedChange.next(checked);
  }
}
