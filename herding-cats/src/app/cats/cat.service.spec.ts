import {
  addProviders,
  inject,
  async
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CatService } from './cat.service';

describe('PeopleService', () => {
  let service: CatService;
  let mockBackend: MockBackend;
  let connection: MockConnection;

  const mockHttpProvider = {
    deps: [MockBackend, BaseRequestOptions],
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }
  };

  beforeEach(() => addProviders([
    MockBackend,
    BaseRequestOptions,
    CatService,
    provide(Http, mockHttpProvider)
  ]));

  beforeEach(inject([CatService, MockBackend], (svc: CatService, backend: MockBackend) => {
    service = svc;
    mockBackend = backend;
    backend.connections.subscribe((c: MockConnection) => connection = c);
  }));

  it('should exist', () => {
    expect(service).toBeTruthy();
  });

  it('should get a list of cats', async(() => {
    let mockCats = [{ name: 'Fluffy' }];

    service.getCatList().subscribe((people) => {
      expect(people).toEqual(mockCats);
    });

    connection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(mockCats)
    })));
  }));
});
