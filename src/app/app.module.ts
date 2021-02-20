/*import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
*/

//(15) Es el módulo principal de la aplicación. En este módulo incluimos todo lo necesario para que la aplicación funcione correctamente. También añadimos el Core module que creamos para fragmentar la aplicación.

//import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { Routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";

//primer login
import { LoginComponent0 } from "./login/login.component";

//segundo login incluido en el navbar
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

//import { RouterModule } from '@angular/router';
//import { CommonModule }      from '@angular/common';

//ERROR AQUI
//import { MdInputModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";

//import { MdButtonModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";

//import { MdCardModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";

import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";

import { ServiceWorkerModule } from "@angular/service-worker";

/*---*/
import { environment } from "../environments/environment";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module"; //icono verde

//import { AngularFireModule } from "angularfire2";//antiguo
import { AngularFireModule } from "@angular/fire"; //INICIALIZAR CONEXION CON FIREBASE
import { AngularFireAuthModule } from "@angular/fire/auth"; //MODULO DE AUTENTICACIONES

//import { AngularFirestoreModule } from "angularfire2/firestore";//antiguo
import { AngularFirestoreModule } from "@angular/fire/firestore"; //nuevo STORE
import { AngularFireStorageModule, BUCKET } from "@angular/fire/storage"; //STORAGE
//import { SendEmailComponent } from "./auth/send-email/send-email.component";

//import { AuthService } from "@auth/services/auth.service";//antiguo
import { AuthService } from "./auth/services/auth.service"; //nuevo

/*
import { CanSuscriptorGuard } from "@app/auth/guards/can-suscriptor.guard";
import { CanAdminGuard } from "@auth/guards/can-admin.guard";
import { CanEditGuard } from "@auth/guards/can-edit.guard";
*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent0,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    //AppRoutingModule,
    ReactiveFormsModule,
    //AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      "librodeclasesbeta"
    ),
    AngularFireAuthModule,
    //...
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule,
    //HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule
    //MdInputModule,
    //MdButtonModule,
    //MdCardModule,
    /*ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })*/
  ],
  providers: [
    AuthService
    /*AngularFirestore*/
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
