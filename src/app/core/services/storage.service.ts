//(5) Servicio auxiliar para administrar el token y usuario almacenados cuando se hace un login. Este servicio permite utilizar la información del usuario que se ha logueado desde cualquier lugar. También tenemos un método para eliminar la información almacenada y posteriormente regresar a la pantalla de login.

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Session } from "../models/session.model";
import { User } from "../models/user.model";

@Injectable()
export class StorageService {
  private localStorageService;
  private currentSession: Session = null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  //metodo que almacena la sesion actual
  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem("usuarioActual", JSON.stringify(session));
  }

  loadSessionData(): Session {
    var sessionStr = this.localStorageService.getItem("usuarioActual");
    return sessionStr ? <Session>JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem("usuarioActual");
    this.currentSession = null;
  }

  getUsuarioActual(): User {
    var session: Session = this.getCurrentSession();
    return session && session.user ? session.user : null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentToken() != null ? true : false;
  }

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return session && session.token ? session.token : null;
  }

  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(["/login"]);
  }
}
