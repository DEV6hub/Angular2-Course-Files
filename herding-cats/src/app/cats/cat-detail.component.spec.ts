import {TestBed, ComponentFixture} from "@angular/core/testing";
import {CatDetailComponent} from "./cat-detail.component";
import {CatService} from "./cat.service";
import {Cat} from "./cat";
import {RouterModule, ActivatedRoute, Router} from "@angular/router";
import {CatYearsPipe} from "./cat-years.pipe";
import {ActivatedRouteStub} from "../../activated-route-stub";
import {RouterStub} from "../../router-stub";
import {BehaviorSubject, Observable} from "rxjs";

describe("CatDetailComponent", () => {
	
	const mockCat = new Cat("Jimmy");
	mockCat.id = 1;
	
	class MockCatService {
		cats: Cat[] = [mockCat];
		favouriteCat: Cat;
		getCat( id: number ):Observable<Cat> {
			return Observable.of(this.cats[0]);
		}
	}
	
	let catDetail: CatDetailComponent;
	let fixture: ComponentFixture<CatDetailComponent>;
	let catService: MockCatService;
	let route: ActivatedRouteStub;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterModule],
			declarations: [CatDetailComponent, CatYearsPipe],
			providers: [
				{ provide: ActivatedRoute, useClass: ActivatedRouteStub },
				{ provide: Router, useClass: RouterStub },
				{ provide: CatService, useClass: MockCatService },
			]
		});
		fixture = TestBed.createComponent(CatDetailComponent);
		catDetail = fixture.componentInstance;
		catService = fixture.debugElement.injector.get(CatService);
		route = fixture.debugElement.injector.get(ActivatedRoute);
		route.testParams = { id: 1 };
	});
	
	it("should get the cat from the route parameters", () => {
		let spy = spyOn(catService, "getCat").and.callThrough();
		catDetail.ngOnInit();
		expect(spy).toHaveBeenCalledWith(route.testParams["id"]);
	});
	
	it("should be able to select a cat as a favourite", () => {
		catDetail.ngOnInit();
		expect(catService.favouriteCat).toBeUndefined();
		catDetail.cat = mockCat;
		catDetail.selectFavourite();
		expect(catService.favouriteCat).toBe(mockCat);
	});
	
	it("should return if a given cat is the current favourite", () => {
		catDetail.ngOnInit();
		catDetail.cat = mockCat;
		expect(catDetail.isFavourite()).toBeFalse();
		catService.favouriteCat = mockCat;
		expect(catDetail.isFavourite()).toBeTrue();
	});
});
