import {Component, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import template from './toggle.html!text';

@Component({
  selector: 'ngc-toggle',
  host: {
    class: 'toggle'
  },
  template,
  encapsulation: ViewEncapsulation.None
})
export class Toggle {
  // Lista obiektów, która zostanie wykorzystana jako wartości przycisku.
  @Input() buttonList;
  // Wejście i stan informujący, który przycisk jest wybrany, muszą odnosić się do obiektu w buttonList.
  @Input() selectedButton;
  // Emiter zdarzeń po zmianie selectedButton wykorzystuje dowiązanie dwukierunkowe o składni [(selected-button)].
  @Output() selectedButtonChange = new EventEmitter();

  // Funkcja zwrotna cyklu życia komponentu wywoływana po tym, jak konstruktor i dane wejściowe zostały ustawione.
  ngOnInit() {
    if (this.selectedButton === undefined) {
      this.selectedButton = this.buttonList[0];
    }
  }

  // Funkcja wybierająca wybrany przycisk i emitująca zdarzenie.
  onButtonActivate(button) {
    this.selectedButton = button;
    this.selectedButtonChange.next(button);
  }
}
