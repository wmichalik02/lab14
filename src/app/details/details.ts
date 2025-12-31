import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService, Person } from '../person';

import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  standalone: true,
  imports:[RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './details.html'
})
export class Details implements OnInit {

  personId!: number;
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.personId = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.personService.getById(this.personId);
  }
}
