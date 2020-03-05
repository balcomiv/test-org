import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@test-org/data'

@Component({
  selector: 'test-org-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[]

  constructor() { }

  ngOnInit(): void {
  }

}
