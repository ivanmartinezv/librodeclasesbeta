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

//import { AngularFirestore } from "angularfire2/firestore";//antiguo
import { AngularFirestore } from "@angular/fire/firestore"; //nuevo
//import { AngularFireDatabase } from "angularfire2/database";//antiguo
import { AngularFireDatabase } from "@angular/fire/database"; //nuevo

//import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AuthenticationService, AngularFirestore, AngularFireDatabase]
})
export class AppComponent {
  public name: string = "ivann";
  public title = "login OP";
  constructor(db: AngularFirestore) {
    console.log("appcomponent running from constructor");
  }
  ngOnInit() {
    console.log("appcomponent running from ngOnInit");
  }
}
