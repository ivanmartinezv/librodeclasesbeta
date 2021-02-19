//(14) En el router definimos las diferentes rutas de la aplicación, estas están asociadas a un componente.
//Tenemos dos rutas que nos dirigen a la /home en caso de que la ruta que se ha buscado esté vacía o no definida.
//El acceso a home está protegido mediante la Guard que comentábamos antes.
//Por lo tanto, si ponemos una ruta desconocida y no estamos logueados nos redirigirá al /login.

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent0 } from "./login/login.component";
import { AuthorizatedGuard } from "./core/guards/authorizated.guard";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

const appRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent /*, canActivate: [AuthorizatedGuard]*/
  },
  //{ path: "login", component: LoginComponent0 },//login antiguo solo loggea datos estaticos
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }
];

export const Routing = RouterModule.forRoot(appRoutes);
