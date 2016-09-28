import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {PersonDetailsComponent} from "./app/person-details.component";
import {PersonDetailsImmutableComponent} from "./app/person-details-immutable.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, PersonDetailsComponent, PersonDetailsImmutableComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
