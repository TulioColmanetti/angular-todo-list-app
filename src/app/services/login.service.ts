import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authenticated: boolean = false;
  // Bypass login screen during tests
  // authenticated: boolean = true;

  showMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  loginUser(email: string, password: string) {
    this.authenticated = email === 'admin@admin.com' && password === '1234';
    this.showMenu.emit(this.authenticated);

    if (this.authenticated) this.router.navigate(['list-tasks']);
  }

  userIsLoggedIn(): boolean {
    return this.authenticated;
  }

  logoutUser() {
    this.authenticated = false;
    this.showMenu.emit(this.authenticated);
    this.router.navigate(['login']);
  }
}
