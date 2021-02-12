//(2) Propiedades de una sesión activa.
//Este modelo guarda el usuario, una vez logueado correctamente, y el token de autentificación que necesitaremos en un futuro para hacer peticiones al backend.

import { User } from "./user.model";

export class Session {
  public token: string;
  public user: User;
}
