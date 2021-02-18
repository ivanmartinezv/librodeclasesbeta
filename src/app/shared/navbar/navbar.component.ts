import { Observable } from "rxjs";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
//import { AuthService } from '@auth/services/auth.service';
import { AuthService } from "../../auth/services/auth.service";
//import { User } from '@shared/models/user.interface';
import { User } from "../models/user.interface";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  //public user$: Observable<User> = this._authService.afAuth.user;

  constructor(public _authService: AuthService, private router: Router) {}

  /*async onLogout() {
    try {
      await this._authService.logout();
      this.router.navigate(["/login"]);
    } catch (error) {
      console.log(error);
    }
  }*/
}
