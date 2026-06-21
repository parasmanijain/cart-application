import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ProductListService } from "./services/product-list.service";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [HeaderComponent, RouterModule],
})
export class AppComponent implements OnInit {
  title = "cart-application";

  constructor(private productListService: ProductListService) {}
  ngOnInit() {
    this.productListService.getProductsList();
  }
}
