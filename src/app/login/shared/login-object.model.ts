//(3) Objeto que permite tener más controlada la información que se enviará a la petición de login.

//se llamaba login-object.model.ts
export class Credencial {
  //nombre de usuario y contraseña del formulario
  public username: string;
  public password: string;

  /*constructor(object: any) {
    this.username = object.username ? object.username : null;
    this.password = object.password ? object.password : null;
  }*/

  constructor(un: string, pw: string) {
    this.username = un;
    this.password = pw;
  }
}
