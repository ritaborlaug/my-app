import { Component, OnInit } from '@angular/core';
import { Todo } from '../app/todo.model';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  todos!: Todo[];
  newTodo: Todo = new Todo();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.refreshTodos();
  }

  deleteOneTodo(todoId: number) {
    this.apiService.deleteTodo(todoId).subscribe(() => {
      this.apiService.getAllTodos().subscribe(data => {
        this.todos = data;
        // this.refreshTodos();
      })
      
    });
  }

  refreshTodos() {
    this.apiService.getAllTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  addTodo() {
    this.apiService.createNewTodo(this.newTodo).subscribe((data) => {
      this.todos.push(data);
      this.newTodo = new Todo();
    })
  }
}
