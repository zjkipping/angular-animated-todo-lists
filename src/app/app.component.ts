import { Component } from '@angular/core';

interface Todo {
  id: number;
  done: boolean;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private todos: Todo[] = [
    { id: 1, done: false, description: 'write some docs' },
    { id: 2, done: false, description: 'start writing JSConf talk' },
    { id: 3, done: true, description: 'buy some milk' },
    { id: 4, done: false, description: 'mow the lawn' },
    { id: 5, done: false, description: 'feed the turtle' },
    { id: 6, done: false, description: 'fix some bugs' },
  ];

  get completedTodos() {
    return this.todos.filter(todo => todo.done);
  }

  get inProgressTodos() {
    return this.todos.filter(todo => !todo.done);
  }
}
