import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo-detail.model';
import { TodoService } from '../../services/todo.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-todo-table',
  standalone: false,
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.css',
})
export class TodoTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'completed',
    'priority',
    'dueDate',
  ];
  dataSource: Todo[] = [];
  todos: Todo[] = [];
  
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodo();
  }

  fetchTodo() {
    //Communication asynchrone donc il faut s'inscrire pour avoir le retour
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }
}
