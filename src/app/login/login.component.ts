//(8) El login component define los campos del formulario mediante el formbuilder, además de la validación del formulario cuando se hace el submit y enviar la petición de login.

import { Component } from "@angular/core";
//para formulario x1
import { FormGroup } from "@angular/forms";
//importados para constructor x1x2
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
//creados e importados para constructor x3x4
import { AuthenticationService } from "./shared/authentication.service";
import { StorageService } from "../core/services/storage.service";
//para ngOnInit x1
import { Validators } from "@angular/forms";
//para metodo submitLogin() x1
import { Credencial } from "./shared/login-object.model";
//para metodo correctLogin() x1
import { Session } from "../core/models/session.model";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent0 {
  //formulario de login
  public loginForm: FormGroup; //[formGroup]="loginForm"
  //por defecto no hay datos enviados
  public submitted: boolean = false;
  //error (codigo y mensaje)
  public error: { code: number; message: string } = null;
  //this.error = {code: 0 , message: "hola"};

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router
  ) {
    //console.log(this.error);
  }

  //iniciar el formulario vacio
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      //formControlName="username"
      username: ["", Validators.required],
      //formControlName="password"
      password: ["", Validators.required]
    });
  }

  //metodo encargado de enviar los datos de login
  public submitLogin(): void {
    //(ngSubmit)="submitLogin()"
    this.submitted = true; //se envian los datos
    this.error = null; //no hay error de campo vacio
    if (this.loginForm.valid) {
      //console.log(this.loginForm);
      let un: string = this.loginForm.value.username;
      let pw: string = this.loginForm.value.password;
      this.authenticationService
        //.login(new Credencial(this.loginForm.value))
        .login(new Credencial(un, pw))
        .subscribe(
          data => this.correctLogin(data),
          error => (this.error = JSON.parse(error._body))
        );
    }
  }

  //este metodo redirige a la vista /home
  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    if (data.user.rol == "Director") {
      console.log("Home de Director");
      this.router.navigate(["/home"]);
    }
    if (data.user.rol == "Profesor") {
      console.log("Home de Profesor");
      this.router.navigate(["/home"]);
    }
  }
}
