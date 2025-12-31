import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService, Person } from '../person';

@Component({
  selector: 'app-details',
  standalone: true,
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
