import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";

if (ENV === 'production') {
	enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);