import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonService, Person } from '../person';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

