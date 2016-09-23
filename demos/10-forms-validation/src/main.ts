import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {PersonDetailsComponent} from "./app/person-details.component";
import {PersonFormComponent} from "./app/person-form.component";

@NgModule({
  declarations: [AppComponent, PersonDetailsComponent, PersonFormComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
