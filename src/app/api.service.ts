import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:8080/todos';
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiURL)
  }

  public getOneTodo(todoID: number):Observable<Todo> {
    return this.http.get<Todo>(`${this.apiURL}/${todoID}`)

  }

  public createNewTodo(newTodo: Todo) {
    return this.http.post<Todo>(this.apiURL, newTodo);
  }

  public deleteTodo(todoID: number) {
    return this.http.delete(`${this.apiURL}/${todoID}`);
  }
}
