import {Component, Input, ViewEncapsulation, HostBinding} from '@angular/core';
import template from './task.html!text';

@Component({
  selector: 'ngc-task',
  host: {
    class: 'task'
  },
  template,
  encapsulation: ViewEncapsulation.None
})
export class Task {
  // Model task może zostać dołączony na elemencie nadrzędnym wewnątrz widoku.
  @Input() task;

  @HostBinding('class.task--done')
  get done() {
    return this.task && this.task.done;
  }
}
