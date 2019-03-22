import {Component, ViewEncapsulation, Inject} from '@angular/core';
import template from './task-list.html!text';

// Tymczasowy serwis, z którego będziemy pobierali zadania.
import {TaskListService} from './task-list-service';

@Component({
  selector: 'ngc-task-list',
  // Właściwość host umożliwia ustawienie niektórych właściwości
  // na elemencie HTML, który powoduje użycie komponentu.
  host: {
    class: 'task-list'
  },
  template,
  // Ustaw TaskListService jako dostawcę.
  providers: [TaskListService],
  encapsulation: ViewEncapsulation.None
})
export class TaskList {
  // Wstrzyknij TaskListService i określ dane do filtracji
  constructor(@Inject(TaskListService) taskListService) {
    this.taskListService = taskListService;
    this.taskFilterList = ['wszystkie', 'otwarte', 'wykonane'];
    this.selectedTaskFilter = 'wszystkie';
  }

  // Metoda zwraca przefiltrowaną listę zadań na podstawie wybranego rodzaju filtracji.
  getFilteredTasks() {
    return this.taskListService.tasks ? this.taskListService.tasks.filter((task) => {
      if (this.selectedTaskFilter === 'wszystkie') {
        return true;
      } else if (this.selectedTaskFilter === 'otwarte') {
        return !task.done;
      } else {
        return task.done;
      }
    }) : [];
  }

  // Funkcja dodająca zadanie z widoku.
  addTask(title) {
    this.taskListService.tasks.push({
      title, done: false
    });
  }
}
