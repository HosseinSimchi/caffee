import { Component } from "@angular/core";
import { PersianNumberPipe } from "../../../shared/Pipes/persianPipes/persian-number.pipe";

@Component({
  selector: "coffee-sub-header",
  imports: [PersianNumberPipe],
  templateUrl: "./sub-header.component.html",
  styleUrl: "./sub-header.component.css",
})
export class SubHeaderComponent {
  convertToPersian(num: number): string {
    return num.toLocaleString("fa-IR");
  }
}
