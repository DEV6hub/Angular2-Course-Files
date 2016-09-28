import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CatDetailComponent} from "./app/cat-detail.component";
import {FormsModule} from "@angular/forms";
import {CatYearsPipe} from "./app/cat-years.pipe";
import {CatService} from "./app/cat.service";
import {CatFormComponent} from "./app/cat-form.component";
import {Headers, BaseRequestOptions, RequestOptions, HttpModule} from "@angular/http";

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule],
	declarations: [AppComponent, CatDetailComponent, CatFormComponent, CatYearsPipe],
	providers: [CatService],
	bootstrap: [AppComponent]
})

export class AppModule {}