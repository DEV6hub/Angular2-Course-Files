import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {PeopleService} from "./app/people.service";
import {PeopleListComponent} from "./app/people-list.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, PeopleListComponent],
	providers: [PeopleService],
	bootstrap: [AppComponent]
})

export class AppModule {}
