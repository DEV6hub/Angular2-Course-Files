import {AppComponent} from "./app/app.component";
import {NgModule} from "@angular/core";
import {PigLatinPipe} from "./app/pig-latin.pipe";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, PigLatinPipe],
	bootstrap: [AppComponent]
})

export class AppModule {}
