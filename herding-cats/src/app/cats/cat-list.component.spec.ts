import {inject, async, ComponentFixture, TestBed} from "@angular/core/testing";
import {Observable} from "rxjs/Observable";
import {CatListComponent} from "./cat-list.component";
import {CatService} from "./cat.service";
import {Cat} from "./cat";
import {RouterModule, Router} from "@angular/router";
import {CatYearsPipe} from "./cat-years.pipe";
import {RouterStub} from "../../router-stub";


describe("CatListComponent", () => {
	const firstCat = new Cat("Jimmy");
	firstCat.id = 1;
	const secondCat = new Cat("Bobby");
	secondCat.id = 2;
	
	const mockCats = [firstCat, secondCat];
	
	class MockCatService {
		getCatList(): Observable<Cat[]> {
			return Observable.of(mockCats);
		}
		
		get favouriteCat (): Cat {
			return firstCat;
		}
	}
	
	let fixture: ComponentFixture<CatListComponent>;
	let catList: CatListComponent;
	let catService: MockCatService;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterModule],
			declarations: [CatListComponent, CatYearsPipe],
			providers: [
				{ provide: CatService, useClass: MockCatService },
				{ provide: Router, useClass: RouterStub }
			]
		});
		fixture = TestBed.createComponent(CatListComponent);
		catList = fixture.componentInstance;
		catService = fixture.debugElement.injector.get(CatService);
	});
	
	it("should be initialized with an array of cats", () => {
		catList.ngOnInit();
		expect(catList.cats).toEqual(Observable.of(mockCats));
		expect(catList.favouriteCat).toEqual(catService.favouriteCat);
	});
	
	it("should render a list of cats", async(() => {
		catList.ngOnInit();
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent.includes(firstCat.name)).toBeTrue();
	}));
	
	it("should navigate to the selected cat detail page", () => {
		catList.ngOnInit();
		let router: RouterStub = fixture.debugElement.injector.get(Router);
		let spy = spyOn(router, "navigate");
		catList.selectCat(secondCat);
		expect(spy).toHaveBeenCalledWith(["cats", secondCat.id]);
	});
});
