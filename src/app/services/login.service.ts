import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authenticated: boolean = false;

  showMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  loginUser(email: string, password: string) {
    this.authenticated = email === 'a' && password === 'b';
    this.showMenu.emit(this.authenticated);

    if (this.authenticated) this.router.navigate(['']);
  }
}
