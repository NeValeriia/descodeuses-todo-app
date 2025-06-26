import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppageComponent } from './signuppage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

describe('SignuppageComponent', () => {
  let component: SignuppageComponent;
  let fixture: ComponentFixture<SignuppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignuppageComponent],
      imports:[MatButtonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatSelectModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulaire invalide si Surname est vide', () =>{
    component.signUpForm.controls['usernamesignup'].setValue('');
    expect(component.signUpForm.valid).toBeFalse()
  });
});
