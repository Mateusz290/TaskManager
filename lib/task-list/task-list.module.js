import { NgModule } from '@angular/core';

// Wczytaj moduł zawierający podstawowe dyrektywy.
import {CommonModule} from '@angular/common';

// Wczytaj moduł zawierający komponenty interfejsu użytkownika.
import {UIModule} from '../ui/ui.module';

// Wczytaj listę zadań i zadanie jako zależności modułu.
import {TaskList} from './task-list';
import {Task} from './task/task';

// Komponent do wpisywania nowych zadań.
import {EnterTask} from './enter-task/enter-task';

// Utwórz moduł listy zadań.
@NgModule({
  declarations: [TaskList, Task, EnterTask],
  imports: [CommonModule, UIModule],
  exports: [TaskList]
})
export class TaskListModule {}
