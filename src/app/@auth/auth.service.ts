import {Injectable} from '@angular/core';
import {UserInterface} from "./interfaces/user.interface";
import {AuthDataInterface} from "./interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: UserInterface | undefined | null;

  constructor() {
  }

  registerUser(authData: AuthDataInterface) {
    this.user = {
      email: authData.email,
      userID: Math.round(Math.random() * 10000)
    }
  }

  login(authData: AuthDataInterface) {
    this.user = {
      email: authData.email,
      userID: Math.round(Math.random() * 10000)
    }
  }

  logout() {
    this.user = null
  }

  getUser() {
    return {...this.user}
  }

  isAuth() {
    return this.user != null
  }
}
