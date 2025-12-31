import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonService, Person } from '../person';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-person.html',
  styleUrls: ['./add-person.css'],
})
export class AddPerson {

  person: Person = {
    firstName: '',
    familyName: '',
    age: undefined,
    address: {
      city: '',
      street: '',
      postCode: ''
    }
  };

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  save() {
    this.personService.add(this.person);
    this.router.navigate(['/']);
  }
}

