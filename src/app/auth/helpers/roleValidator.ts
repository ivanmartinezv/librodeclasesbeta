//import { User } from "@shared/models/user.interface";

import { User } from "../../shared/models/user.interface";

export class RoleValidator {
  isProfesor(user: User): boolean {
    return user.rol === "PROFESOR";
  }

  isDirector(user: User): boolean {
    return user.rol === "DIRECTOR";
  }

  isAdmin(user: User): boolean {
    return user.rol === "ADMIN";
  }
}
