// Zaimportuj dekorator modułu i pozostałe zależności.
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { App }   from './app';

// Aplikacja wykorzystuje dyrektywę TaskList jako część modułu.
import {TaskListModule} from './task-list/task-list.module';

// Utwórz moduł główny wykorzystujący komponent główny aplikacji i moduł przeglądarki
// Następnie zaimportuj inne moduły aplikacji.
@NgModule({
  declarations: [App],
  imports:      [BrowserModule, TaskListModule],
  bootstrap:    [App],
})
export class AppModule {}
