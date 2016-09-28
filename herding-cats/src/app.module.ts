import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CatDetailComponent} from "./app/cat-detail.component";
import {FormsModule} from "@angular/forms";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CatDetailComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
