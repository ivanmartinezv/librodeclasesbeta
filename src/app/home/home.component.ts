//(10) Componente «home» para comprobar la funcionalidad de la autenticación y demostrar cómo utilizar el StorageService para obtener el usuario. También podemos hacer un logout.

import { Component } from "@angular/core";
import { StorageService } from "../core/services/storage.service";
import { User } from "../core/models/user.model";
import { AuthenticationService } from "../login/shared/authentication.service";

@Component({
  selector: "home",
  templateUrl: "home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  public user: User; //usuario actual
  public rol: string; //rol del usuario
  public polo: string = "polo peludo";

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.user = this.storageService.getUsuarioActual();
    //console.log(this.user);
    this.rol = this.user.rol;
    //console.log("rol: " + this.rol);
  }

  public esDirector(): boolean {
    //console.log(this.user.rol+"+");
    if (this.rol == "Director") {
      //console.log("es director");
      return true;
    }
    return false;
  }

  public esProfesor(): boolean {
    //console.log(this.user.rol+"-");
    if (this.rol == "Profesor") {
      //console.log("es profesor");
      return true;
    }
    return false;
  }

  public logout(): void {
    this.authenticationService.logout().subscribe(response => {
      if (response) {
        this.storageService.logout();
      }
    });
  }
}
