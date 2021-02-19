import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
//import { AuthService } from "@auth/services/auth.service";
import { AuthService } from "../services/auth.service";
//import { User } from "@app/shared/models/user.interface";
import { User } from "../../shared/models/user.interface";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  public titulo: string = "formulario de registro";

  registerForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private _authService: AuthService, private router: Router) {
    console.log("register component running");
  }

  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this._authService.register(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(["/home"]);
    } else if (user) {
      this.router.navigate(["/verification-email"]);
    } else {
      this.router.navigate(["/register"]);
    }
  }
}
