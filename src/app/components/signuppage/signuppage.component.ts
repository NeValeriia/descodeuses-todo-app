import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signuppage',
  standalone: false,
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.css',
})
export class SignuppageComponent implements OnInit {
  listGenre = [
    { text: 'Femme', value: 'f' },
    { text: 'Homme', value: 'h' },
  ];
  signUpForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      //première parametre valeur initiale du champ
      //deuxième parametre liste de validators

      usersurnamesignup: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z0-9]+$'),
        ],
      ],
      usernamesignup: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z0-9]+$'),
        ],
      ],
      userpseudosignup: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z0-9]+$'),
        ],
      ],
      motdepassesignup: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')],
      ],
    });
  }
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }
}
