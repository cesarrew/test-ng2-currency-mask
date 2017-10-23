import { BrowserModule } from "@angular/platform-browser";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./component/app.component";
//import { CurrencyMaskDirective } from "./directive/currency-mask.directive";

@NgModule({
    imports: [
        BrowserModule,
        CurrencyMaskModule,
        FormsModule
    ],
    declarations: [
        AppComponent
        //CurrencyMaskDirective
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}