import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CatDetailComponent} from "./app/cat-detail.component";
import {FormsModule} from "@angular/forms";
import {CatYearsPipe} from "./app/cat-years.pipe";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CatDetailComponent, CatYearsPipe],
	bootstrap: [AppComponent]
})

export class AppModule {}
