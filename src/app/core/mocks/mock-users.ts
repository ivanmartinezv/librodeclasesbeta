import { User } from "../models/user.model";

export const USERS: User[] = [
  {
    id: 1,
    name: "Juan",
    surname: "Castillo",
    email: "jcast@somewhere.com",
    username: "jcastillo",
    password: "abcd",
    especialidad: "Historia",
    rol: "Director" //o Inspector??
  },
  {
    id: 2,
    name: "ivan",
    surname: "ivanovich",
    email: "ivan@somewhere.com",
    username: "a",
    password: "a",
    especialidad: "Matemática",
    rol: "Profesor"
  }
];
