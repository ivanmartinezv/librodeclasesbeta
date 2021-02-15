/*import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  name = "Angular " + VERSION.major;
    
}*/

//(12) El componente App es la raíz de toda la aplicación. Al ser el componente base, ponemos el router, es decir, el espacio donde los diferentes componentes irán apareciendo según la ruta.

import { Component } from "@angular/core";
import { AuthenticationService } from "./login/shared/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AuthenticationService]
})
export class AppComponent {
  public name: string = "ivann";
}
