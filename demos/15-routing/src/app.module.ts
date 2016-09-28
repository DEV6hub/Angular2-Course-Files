import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {DashboardComponent} from "./app/dashboard.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {appRouting} from "./app/app.routes";
import {PeopleModule} from "./app/people/people.module";

@NgModule({
	imports: [RouterModule, BrowserModule, PeopleModule, appRouting],
	declarations: [AppComponent, DashboardComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
