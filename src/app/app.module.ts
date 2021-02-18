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

import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { Routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

import { NavbarComponent } from "./shared/navbar/navbar.component";

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

import { environment } from "../environments/environment";
import { ServiceWorkerModule } from "@angular/service-worker";

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    HttpClientModule,
    Routing,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
    //MdInputModule,
    //MdButtonModule,
    //MdCardModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
