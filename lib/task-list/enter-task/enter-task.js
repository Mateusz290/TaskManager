import {Component, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import template from './enter-task.html!text';

@Component({
  selector: 'ngc-enter-task',
  host: {
    class: 'enter-task'
  },
  template,
  encapsulation: ViewEncapsulation.None
})
export class EnterTask {
  // Emiter zdarzeń, który zostaje wywołany, gdy wpiszemy nowe zadanie.
  @Output() taskEntered = new EventEmitter();

  // Funkcja emituje zdarzenie taskEntered i czyści pole tytułu zadania.
  enterTask(titleInput) {
    this.taskEntered.next(titleInput.value);
    titleInput.value = '';
    titleInput.focus();
  }
}
