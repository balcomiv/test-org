import { Component } from '@angular/core';
import { Todo } from '@test-org/data'

@Component({
  selector: 'test-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [];

  addTodo() {
    console.log('Adding Todo!');
  }
}
