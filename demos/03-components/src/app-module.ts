import {AppComponent} from "./app/app-component";
import {NgModule} from "@angular/core";
import {InsideOutsideComponent} from "./app/inside-outside-component";
import {PersonDetailsComponent} from "./app/person-details-component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, InsideOutsideComponent, PersonDetailsComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
