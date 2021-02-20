import { FormGroup, FormControl } from "@angular/forms";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
//import { AuthService } from "@auth/services/auth.service";
import { AuthService } from "../services/auth.service";
//import { User } from "@app/shared/models/user.interface";
import { User } from "../../shared/models/user.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public titulo: string = "formulario de login";

  //objeto del formulario que captura credenciales
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private _authService: AuthService, private router: Router) {
    console.log("login component running");
  }

  //METODO DE LOGIN QUE LLAMA AL LOGIN DEL AUTH.SERVICE
  async onLogin() {
    const { email, password } = this.loginForm.value; //datos del formulario
    try {
      const user = await this._authService.login(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onGoogleLogin() {
    /*try {
      const user = await this._authService.loginGoogle();
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }*/
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
