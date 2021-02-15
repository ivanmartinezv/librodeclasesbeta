//(6)Implementamos un login sin backend que lo respalde, por lo tanto hemos creado una versión muy simplificada de un fake backend con los endpoints que necesitamos para hacerlo funcionar.

import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";
//importar objeto User
import { User } from "../models/user.model";
//importar usuarios preseteados para buscar el del login
import { USERS } from "../mocks/mock-users";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  public url_Login: string = "/api/authenticate/login";
  public url_Logout: string = "/api/authenticate/logout";

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    let users: any[] = JSON.parse(localStorage.getItem("users")) || [];

    // wrap in delayed observable to simulate server api call
    return (
      of(null)
        .pipe(
          mergeMap(() => {
            // fake authenticate api end point
            if (
              request.url.endsWith(this.url_Login) &&
              request.method === "POST"
            ) {
              console.log(request);
              //primero captura el body de la request con las credenciales
              let params = request.body; //Objeto Credencial

              //(1.A) La función LOGIN revisa las credenciales de usuario, devuelve un token (si son validas) y el usuario en el body que coincidirá con los parámetros que reciba.

              //segundo recorre el json de USERS buscando el username
              let encontrado: User = USERS.find((user: User) => {
                /*if (params.username === user.username){
                  console.log("username encontrado");
                  y retorna el User
                }*/
                return params.username === user.username;
              });
              //tercero, si encuentra el username
              if (encontrado) {
                //si no es NULL
                //si encuentra el username, tiene que matchear la contraseña
                if (params.password === encontrado.password) {
                  //SI LA CONTRASEÑA COINCIDE
                  //funcion que Genera token
                  let generaToken: string = "fake-token-jwt";
                  return of(
                    new HttpResponse({
                      status: 200,
                      body: { token: generaToken, user: encontrado }
                    })
                  );
                } else {
                  //SI LA CONTRASEÑA NO COINCIDE, devuelve error
                  return throwError({
                    code: 2,
                    message: "La contraseña no coincide."
                  });
                }
              } else {
                //SI EL USUARIO NO FUE ENCONTRADO, devuelve error
                return throwError({
                  code: 1,
                  message: "El username no existe."
                });
              }
            }

            //El logout simplemente nos devuelve un true.
            if (
              request.url.endsWith(this.url_Logout) &&
              request.method === "POST"
            ) {
              return of(new HttpResponse({ status: 200, body: true }));
            }

            // pass through any requests not handled above
            return next.handle(request);
          })
        )

        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())
    );
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
