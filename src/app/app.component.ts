import { Component } from "@angular/core";
import { HomeComponent } from "./home.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-home />
  `,
  styles: [],
  imports: [HomeComponent],
})
export class AppComponent {
  title = "ng-strongly-type-table";
}
