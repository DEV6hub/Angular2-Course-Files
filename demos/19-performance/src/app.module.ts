import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {ProgressBarComponent} from "./app/progress-bar.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, ProgressBarComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
