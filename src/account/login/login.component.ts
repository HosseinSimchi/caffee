import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "../../state/login/login.reducer";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  imports: [CommonModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  constructor(private readonly store: Store) {}
  getState: any;
  ngOnInit(): void {
    this.getState = this.store.select(selectCount);
    console.info(this.getState);
  }
}
