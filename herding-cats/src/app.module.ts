import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {CatModule} from "./app/cats/cat.module";
import {appRouting} from "./app/app.routes";
import {RequestOptions, BaseRequestOptions} from "@angular/http";

class JSONRequestOptions extends BaseRequestOptions {
	constructor() {
		super();
		this.headers.append("Content-Type", "application/json;charset=UTF-8");
	}
}

@NgModule({
	imports: [CatModule, appRouting],
	declarations: [AppComponent],
	providers: [{ provide: RequestOptions, useClass: JSONRequestOptions }],
	bootstrap: [AppComponent]
})

export class AppModule {}