import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  imports: [CommonModule],
})
export class ModalComponent implements OnInit {
  public visible = false;
  public visibleAnimate = false;
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  public show(): void {
    this.modalService.show(this);
  }

  public hide(): void {
    this.modalService.hide(this);
  }
}
