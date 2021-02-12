//(4) Este servicio permite comunicarnos con el servidor para hacer login a través de una petición HTTP (Post) enviando un nombre de usuario y una contraseña.

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginObject } from "./login-object.model";
import { Session } from "../../core/models/session.model";

/*import { Http, Response } from "@angular/http";*/
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthenticationService {
  private basePath = "/api/authenticate/";

  //Se tiene que pasar por constructor el Http de Angular para ejecutar las peticiones.
  //constructor(private http: Http) {}
  constructor(private http: HttpClient) {}

  //La petición de login nos devolverá un observable de tipo Session que almacenaremos después.
  login(loginObj: LoginObject): Observable<Session> {
    //return this.http.post(this.basePath + "login", loginObj).map(this.extractData);
    return this.http.post<Session>(this.basePath + "login", loginObj);
  }

  //El logout nos devolverá un observable de tipo Boolean.
  logout(): Observable<Boolean> {
    //return this.http.post(this.basePath + "logout", {}).map(this.extractData);
    return this.http.post<Boolean>(this.basePath + "logout", {});
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
