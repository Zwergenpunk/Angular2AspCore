import { Component } from "@angular/core";
import { OverviewComponent } from "./overview/overview.component"

@Component({
    selector: "my-app",
    template: `<overview></overview>asd`,
    directives: [OverviewComponent]
})
export class AppComponent {

}