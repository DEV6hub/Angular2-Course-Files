import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {RedComponent} from "./app/red.component";
import {GreenComponent} from "./app/green.component";
import {NoStyleComponent} from "./app/no-style.component";
import {NativeStyleComponent} from "./app/native-style.component";

@NgModule({
	declarations: [AppComponent, RedComponent, GreenComponent, NoStyleComponent, NativeStyleComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
