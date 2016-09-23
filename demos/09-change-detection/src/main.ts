import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {PersonDetailsComponent} from "./app/person-details.component";
import {PersonDetailsImmutableComponent} from "./app/person-details-immutable.component";

@NgModule({
	declarations: [AppComponent, PersonDetailsComponent, PersonDetailsImmutableComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
