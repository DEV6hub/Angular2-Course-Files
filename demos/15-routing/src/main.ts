import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {DashboardComponent} from "./app/dashboard.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule],
  declarations: [AppComponent, DashboardComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
