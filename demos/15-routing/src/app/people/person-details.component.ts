import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Person } from './person.model';
import { PeopleService } from './people.service';

@Component({
  selector: 'person-details',
  template: require('./person-details.component.html')
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  person: Person;
  private paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params
      .map(params => +params['id'])
      .subscribe((id) => {
        this.peopleService.getPerson(id)
          .then(person => this.person = person)
          .catch(error => console.error(error));
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
