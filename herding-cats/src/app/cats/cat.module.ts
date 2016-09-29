import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {catRouting} from "./cats.routes";
import {CatsComponent} from "./cats.component";
import {CatFormComponent} from "./cat-form.component";
import {CatDetailComponent} from "./cat-detail.component";
import {CatListComponent} from "./cat-list.component";
import {CatService} from "./cat.service";
import {CatYearsPipe} from "./cat-years.pipe";
import {FormsModule} from "@angular/forms";
@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule, catRouting],
	declarations: [CatsComponent, CatFormComponent, CatDetailComponent, CatListComponent, CatYearsPipe],
	providers: [CatService],
	exports: [CatsComponent]
})

export class CatModule {}