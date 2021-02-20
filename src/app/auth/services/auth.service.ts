//import { User } from "@shared/models/user.interface";
import { User } from "../../shared/models/user.interface";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth"; //ok
//import { auth } from "firebase/app"; //DRAMA
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

//angularfirestore para el STORE de datos
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
//import { RoleValidator } from "@auth/helpers/roleValidator";
import { RoleValidator } from "../helpers/roleValidator"; //ok
//---FIN DE LOS IMPORT---

//problema al importar
//import { auth } from "firebase/app";//antiguo
//import { auth } from "firebase";

//import { auth } from "../../../../../node_modules/firebase";
//import firebase from "firebase";
//import * as firebase from "firebase/app";
//import "@firebase/firestore";
//import "@firebase/auth";
//acaba problema
//import firebase from "firebase/app";
//import "firebase/firestore";
//import "firebase/auth";

//angulardatabase para el BDD de datos
//import { AngularFireDatabase } from "angularfire2/database";//antiguo
import { AngularFireDatabase } from "@angular/fire/database"; //nuevo

@Injectable({ providedIn: "root" })
export class AuthService extends RoleValidator {
  public user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  MINUTO 56 DEL VIDEO

  //login del formulario
  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user); //metodo privado de este servicio
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  async loginGoogle() /*: Promise<User>*/ {
    console.log("async loginGoogle()");
    /*try {
      const { user } = await this.afAuth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }*/
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}` //ojo con las comillas y el atributo uid
    );

    const data: User = {
      uid: user.uid, //ojo con el atributo uid
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      rol: "ADMIN"
    };

    return userRef.set(data, { merge: true });
  }
}
