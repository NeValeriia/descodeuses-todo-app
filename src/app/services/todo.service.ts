import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo-detail.model';

//commande pour creer le fichier:
//ng g service todo

//Le service fait le lien entre le front et le back
//il fait les operations CRUD: create, read, update, delete
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiURL = 'api/todos';
  //HttpClient pour communiquer avec le API/Backend
  constructor(private http: HttpClient) {}

  //crud
  //create todo
  // Todo: type de retour
  addTodo(todo: Todo) {
    return this.http.post<Todo>(this.apiURL, todo);
  }
  //read
  //fetch liste
  getTodos() {
    //http get sans 2eme parametre parce qu'il n'y a pas de corps(body)
    return this.http.get<Todo[]>(this.apiURL); //Todo[] - le type de retour est un tableau de Todo
  }

  //read
  // fetch un item de todo
  getTodo(id: number) {
    return this.http.get<Todo>(this.apiURL + '/' + id);
  }

  //update
  //fetch un item de todo
  updateTodo(item: Todo) {
    return this.http.put<Todo>(this.apiURL, item);
  }
  //delete
  deleteTodo(id: number) {
    return this.http.delete(this.apiURL + '/' + id);
  }
}
