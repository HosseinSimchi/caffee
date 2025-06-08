import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { selectUsername } from "../../state/login/login.reducer";
import { loginActions } from "../../state/login/login.action";

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
    // this.getState = this.store.select(selectUsername);
    // this.store.dispatch(loginActions.saveUsername({ username: "simchi" }));
  }
}
