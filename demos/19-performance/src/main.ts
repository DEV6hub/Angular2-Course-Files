import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {ProgressBarComponent} from "./app/progress-bar.component";

@NgModule({
	declarations: [AppComponent, ProgressBarComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
