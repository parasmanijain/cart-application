import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from "@angular/core";
import { ProductListService } from "../../services/product-list.service";
import {
  ChangeContext,
  LabelType,
  NgxSliderModule,
  Options,
} from "@angular-slider/ngx-slider";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
  imports: [NgxSliderModule],
})
export class FilterComponent implements OnInit {
  @Input() modal;
  @Output() modalClosed: EventEmitter<any> = new EventEmitter();
  public minValue;
  public maxValue;
  public isMobile = false;
  public selectedMin;
  public selectedMax;
  options: Options = {
    floor: 100,
    ceil: 10000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "&#8377;" + value;
        case LabelType.High:
          return "&#8377;" + value;
        default:
          return "&#8377;" + value;
      }
    },
  };

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.isMobile = window.innerWidth < 768 ? true : false;
  }

  constructor(private productListService: ProductListService) {}

  ngOnInit() {
    this.isMobile = window.innerWidth < 768 ? true : false;
    this.minValue = this.productListService.min.getValue()
      ? this.productListService.min.getValue()
      : 100;
    this.maxValue = this.productListService.max.getValue()
      ? this.productListService.max.getValue()
      : 10000;
    this.selectedMin = this.minValue;
    this.selectedMax = this.maxValue;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.selectedMin = changeContext.value;
    this.selectedMax = changeContext.highValue;
  }

  applyFilterMobile() {
    this.applyFilter();
    this.hide();
  }

  applyFilter() {
    this.productListService.min.next(this.selectedMin);
    this.productListService.max.next(this.selectedMax);
    this.productListService.searchSortFilter();
  }

  hide() {
    this.modal.hide();
    this.modalClosed.emit();
  }
}
