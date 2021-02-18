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
  //{ path: "login", component: LoginComponent0 },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }
];

export const Routing = RouterModule.forRoot(appRoutes);
