import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PersonService, Person } from '../person';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export class List implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons() {
    this.persons = this.personService.getAll();
  }

  remove(index: number) {
    this.personService.remove(index);
    this.loadPersons();
  }
}

