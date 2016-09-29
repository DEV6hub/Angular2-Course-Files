import {async} from "@angular/core/testing";
import {Http, BaseRequestOptions, Response, ResponseOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {CatService} from "./cat.service";

describe("CatService", () => {
  let service: CatService;
  let connection: MockConnection;
  

  beforeEach(() => {
    let backend = new MockBackend();
    let http: Http = new Http(backend, new BaseRequestOptions());
    backend.connections.subscribe((c: MockConnection) => connection = c);
    service = new CatService(http);
  });

  it("should get a list of cats", async(() => {
    let mockCats = [{ name: "Fluffy" }];

    service.getCatList().subscribe((people) => {
      expect(people).toEqual(mockCats);
    });

    connection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(mockCats)
    })));
  }));
});
