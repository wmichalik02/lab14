import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PersonService, Person } from '../person';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatListModule, MatButtonModule, MatIconModule, MatDividerModule],
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

