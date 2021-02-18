import { FormGroup, FormControl } from "@angular/forms";
import { Component } from "@angular/core";

//https://www.youtube.com/watch?v=rwIOw7f0RHk&list=PL_9MDdjVuFjEJXpRgrCMvxKHgdtdk6AOJ&t=0s&ab_channel=DominiCode  37:20

import { AuthService } from "@auth/services/auth.service";
import { Router } from "@angular/router";
import { User } from "@app/shared/models/user.interface";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });
  constructor(private authSvc: AuthService, private router: Router) {}

  async onGoogleLogin() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
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
