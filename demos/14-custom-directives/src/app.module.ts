import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {HoverHighlightDirective} from "./app/hover-highlight.directive";
import {UnlessDirective} from "./app/unless.directive";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, HoverHighlightDirective, UnlessDirective],
	bootstrap: [AppComponent]
})

export class AppModule {}
