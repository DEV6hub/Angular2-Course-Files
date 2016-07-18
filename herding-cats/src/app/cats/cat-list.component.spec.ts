import {
  addProviders,
  inject,
  async,
  TestComponentBuilder
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CatListComponent } from './cat-list.component';
import { CatService } from './cat.service';
import { Cat } from './cat.model';

/*
 * As of @angular/router 3.0.0-beta.2 the following tests will not
 * run due to the component's dependency on the router. The router
 * does not currently contain an API for unit testing. This API should
 * be included in the next release. These tests should be refactored
 * at that point in time. The code below is provided for example
 * purposes only.
 */

xdescribe('CatListComponent', () => { // Test Suite Disabled
  const mockCat = new Cat('Jimmy');
  mockCat.id = 1;

  const mockCats = [mockCat];

  class MockCatService {
    getCatList(): Observable<Cat[]> {
      return Observable.of(mockCats);
    }
  }

  let builder: TestComponentBuilder;
  let catList: CatListComponent;
  let catService: MockCatService;

  beforeEach(() => addProviders([
    provide(CatService, { useClass: MockCatService }),
    CatListComponent,
    TestComponentBuilder
  ]));

  beforeEach(inject([CatListComponent, CatService, TestComponentBuilder],
    (component: CatListComponent, service: CatService, tcb: TestComponentBuilder) => {
      catList = component;
      catService = service;
      builder = tcb;
  }));

  it('should exist', () => {
    expect(catList).toBeTruthy();
  });

  it('should be initialized with an array of cats', () => {
    catList.ngOnInit();
    expect(catList.cats).toEqual(Observable.of(mockCats));
  });

  it('should render a list of cats', async(() => {
    catList.ngOnInit();
    builder.createAsync(CatListComponent).then(fixture => {
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent.includes(mockCat.name)).toBeTrue();
    });
  }));
});
