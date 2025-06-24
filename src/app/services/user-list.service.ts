import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserList } from '../models/user-list.model';

//Le service fait le lien entre le front et le back
//il fait les operations CRUD: create, read, update, delete

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private apiURL = 'api/users';
  //HttpClient pour communiquer avec le API/Backend
  constructor(private http: HttpClient) {}

  //crud
  //create todo
  // Todo: type de retour
  addUser(users: UserList) {
    return this.http.post<UserList>(this.apiURL, users);
  }

  //read
  //fetch liste
  getUserList() {
    //http get sans 2eme parametre parce qu'il n'y a pas de corps(body)
    return this.http.get<UserList[]>(this.apiURL);
  }

  //read
  // fetch un item de todo
  getUser(id: number) {
    return this.http.get<UserList>(this.apiURL + '/' + id);
  }

  //update
  //fetch un item de todo
  updateUserList(item: UserList) {
    return this.http.put<UserList>(this.apiURL, item);
  }
  //delete
  deleteUser(id: number) {
    return this.http.delete(this.apiURL + '/' + id);
  }
}
