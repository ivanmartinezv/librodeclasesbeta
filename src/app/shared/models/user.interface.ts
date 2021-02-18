export type Roles = "PROFE JEFE" | "PROFESOR" | "DIRECTOR" | "ADMIN";

//(1) Propiedades mínimas requeridas que debe tener un usuario.
export interface User {
  //por defecto
  id: string; //uid
  name: string;
  surname: string;
  email: string;
  //username: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  //photoURL?: string;
  rol?: Roles; //tipo de usuario
  //adicionales
  //especialidad: string; //director,profe,etc
  //rol: string; //admin,profejefe,profe,etc
}
