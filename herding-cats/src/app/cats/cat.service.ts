import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Cat } from './cat';

@Injectable()
export class CatService {
  favouriteCat: Cat;
  private apiBase = 'http://localhost:9000';

  constructor(private http: Http) { }

  getCatList(): Observable<Cat[]> {
    return this.http.get(`${this.apiBase}/cats`)
      .map(response => response.json() as Cat[]);
  }

  getCat(id: number): Observable<Cat> {
    return this.http.get(`${this.apiBase}/cats/${id}`)
      .map(response => response.json() as Cat);
  }

  saveCat(cat: Cat): Promise<Cat> {
    if (cat.id) {
      return this.http.put(`${this.apiBase}/cats/${cat.id}`, JSON.stringify(cat))
        .toPromise()
        .then(response => response.json() as Cat);
    } else {
      return this.http.post(`${this.apiBase}/cats`, JSON.stringify(cat))
        .toPromise()
        .then(response => response.json() as Cat);
    }
  }

  removeCat(cat: Cat): Promise<void> {
    return this.http.delete(`${this.apiBase}/cats/${cat.id}`)
      .toPromise()
      .then(response => response.json());
  }
}
