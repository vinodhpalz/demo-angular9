import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  constructor(private builder: FormBuilder) {}
  userForm = this.builder.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    lastName: [''],
    address: this.builder.group({
      city: [''],
      state: [''],
      country: [''],
    }),
    roles: this.builder.array([this.builder.control('')]),
  });

  get roles() {
    return this.userForm.get('roles') as FormArray;
  }

  addRoles() {
    this.roles.push(this.builder.control(''));
  }

  onSubmit() {
    console.warn(this.userForm.value);
  }

  updateUser() {
    this.userForm.patchValue({
      firstName: 'Google',
      address: {
        city: 'Delhi',
      },
    });
  }

  ngOnInit(): void {}
}
