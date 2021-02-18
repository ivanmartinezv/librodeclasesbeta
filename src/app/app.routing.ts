//(14) En el router definimos las diferentes rutas de la aplicación, estas están asociadas a un componente.
//Tenemos dos rutas que nos dirigen a /home en caso de que la ruta que se ha buscado esté vacía o no definida.
//El acceso a /home está protegido mediante la Guard que comentábamos antes. Por lo tanto, si ponemos una ruta desconocida y no estamos logueados nos redirigirá a /login.

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
//primer login
import { LoginComponent0 } from "./login/login.component";
import { AuthorizatedGuard } from "./core/guards/authorizated.guard";
//segundo login
import { LoginComponent } from "./auth/login/login.component";

const appRoutes: Routes = [
  //ruta vacia lleva a home
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthorizatedGuard] },
  //  { path: "login", component: LoginComponent0 },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "/home" }
];

export const Routing = RouterModule.forRoot(appRoutes);
