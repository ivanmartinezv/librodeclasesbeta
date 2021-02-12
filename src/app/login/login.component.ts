//(8) El login component define los campos del formulario mediante el formbuilder, además de la validación del formulario cuando se hace el submit y enviar la petición de login.

import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { LoginObject } from "./shared/login-object.model";
import { AuthenticationService } from "./shared/authentication.service";
import { StorageService } from "../core/services/storage.service";
import { Router } from "@angular/router";
import { Session } from "../core/models/session.model";

@Component({
  selector: "login",
  templateUrl: "login.component.html"
})
export class LoginComponent {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: { code: number; message: string } = null;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  //metodo encargado de validar el formulario de login
  public submitLogin(): void {
    //(ngSubmit)="submitLogin()"
    this.submitted = true;
    this.error = null;
    if (this.loginForm.valid) {
      this.authenticationService
        .login(new LoginObject(this.loginForm.value))
        .subscribe(
          data => this.correctLogin(data),
          error => (this.error = JSON.parse(error._body))
        );
    }
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    this.router.navigate(["/home"]);
  }
}
