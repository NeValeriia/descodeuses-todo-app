import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

//'@' signifie decorateur
//qui decore la classe component
// il vient juste avant la classe
@Component({
  selector: 'app-login',
  standalone: false, //composant accessible via un module seulement, oblig. de le mettre dans un module
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

//'implements' pour implementer une interface
//une classe peut implementer plusieurs interfaces
export class LoginComponent implements OnInit {
  // point d'exclamation pour pouvoir initialiser LA VARIABLE!! plus tard
  loginForm!: FormGroup;
  //j'utilise l'injection automatique de angular pour recuperer
  //un objet form builder qui va construire le formulaire
  //pour faire cela j'ajoute ce que j'ai besoin dans les parametres
  //private avant formBuilder pour pouvoir acceder a la variable
  // en dehors du constructeur
  constructor(private formBuilder: FormBuilder, private router: Router
  
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //première parametre valeur initiale du champ
      //deuxième parametre liste de validators
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern]],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
    if (this.loginForm.value.username =='admin@test.com'&&
    this.loginForm.value.password =='admin'){
      sessionStorage.setItem('IsLoggedIn','true');
      this.router.navigateByUrl('');
    }
   
  }
}
