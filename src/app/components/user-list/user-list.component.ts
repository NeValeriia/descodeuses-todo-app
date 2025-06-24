import { Component, OnInit } from '@angular/core';
import { UserList } from '../../models/user-list.model';
import { UserListService } from '../../services/user-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  formGroup: FormGroup;
  users: UserList[] = [];

  constructor(
    private fb: FormBuilder,
    private UserListService: UserListService
  ) {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    //Communication asynchrone donc il faut s'inscrire pour avoir le retour
    this.UserListService.getUserList().subscribe((data) => {
      this.users = data;
    });
  }

  onAddUser() {
    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;
    }
  }
}
