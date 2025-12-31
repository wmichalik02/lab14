import { Injectable } from '@angular/core';

export interface Person {
  firstName?: string;
  familyName?: string;
  age?: number;
  address?: {
    city?: string;
    street?: string;
    postCode?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private storageKey = 'persons';

  getAll(): Person[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getById(index: number): Person {
    return this.getAll()[index];
  }

  add(person: Person) {
    const persons = this.getAll();
    persons.push(person);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

  remove(index: number) {
    const persons = this.getAll();
    persons.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }
}
