//(1) Propiedades mínimas requeridas que debe tener un usuario.
export class User {
  public id: number;
  public name: string;
  public surname: string;
  public email: string;
  public username: string;
  public password?: string;
}
