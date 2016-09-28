import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CatDetailComponent} from "./app/cat-detail.component";
import {FormsModule} from "@angular/forms";
import {CatYearsPipe} from "./app/cat-years.pipe";
import {CatService} from "./app/cat.service";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CatDetailComponent, CatYearsPipe],
	providers: [CatService],
	bootstrap: [AppComponent]
})

export class AppModule {}
