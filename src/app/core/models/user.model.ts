//(1) Propiedades mínimas requeridas que debe tener un usuario.
export class User {
  //por defecto
  public id: number;
  public name: string;
  public surname: string;
  public email: string;
  public username: string;
  public password?: string;
  //adicionales
  public especialidad: string; //director,profe,etc
  public rol: string; //admin,profejefe,profe,etc
}
