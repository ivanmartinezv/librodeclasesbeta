//(10) Componente «home» para comprobar la funcionalidad de la autenticación y demostrar cómo utilizar el StorageService para obtener el usuario. También podemos hacer un logout.

import { Component } from "@angular/core";
import { StorageService } from "../core/services/storage.service";
import { User } from "../core/models/user.model";
import { AuthenticationService } from "../login/shared/authentication.service";

@Component({
  selector: "home",
  templateUrl: "home.component.html"
})
export class HomeComponent {
  public user: User;
  public polo: string = "polo peludo";

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }

  public logout(): void {
    this.authenticationService.logout().subscribe(response => {
      if (response) {
        this.storageService.logout();
      }
    });
  }
}
