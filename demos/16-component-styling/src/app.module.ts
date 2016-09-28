/**
 * Created by tpadley on 2016-09-26.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {RedComponent} from "./app/red.component";
import {GreenComponent} from "./app/green.component";
import {NoStyleComponent} from "./app/no-style.component";
import {NativeStyleComponent} from "./app/native-style.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, RedComponent, GreenComponent, NoStyleComponent, NativeStyleComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
