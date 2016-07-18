import {
  addProviders,
  inject
} from '@angular/core/testing';
import { provide } from '@angular/core';

import { CatDetailComponent } from './cat-detail.component';
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

xdescribe('CatDetailComponent', () => { // Test Suite Disabled

  const mockCat = new Cat('Jimmy');
  mockCat.id = 1;

  class MockCatService {
    favouriteCat: Cat;
  }

  let catDetail: CatDetailComponent;
  let catService: MockCatService;

  beforeEach(() => addProviders([
    provide(CatService, { useClass: MockCatService }),
    CatDetailComponent
  ]));

  beforeEach(inject([CatDetailComponent, CatService],
    (component: CatDetailComponent, service: CatService) => {
      catDetail = component;
      catService = service;
  }));

  it('should exist', () => {
    expect(catDetail).toBeTruthy();
  });

  it('should be able to select a cat as a favourite', () => {
    expect(catService.favouriteCat).toBeUndefined();
    catDetail.cat = mockCat;
    catDetail.selectFavourite();
    expect(catService.favouriteCat).toBe(mockCat);
  });

  it('should return if a given cat is the current favourite', () => {
    catDetail.cat = mockCat;
    expect(catDetail.isFavourite()).toBe(false);
    catService.favouriteCat = mockCat;
    expect(catDetail.isFavourite()).toBe(true);
  });
});
