import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  render: boolean = false;
  // Bypass login screen during tests
  // render: boolean = true;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.showMenu.subscribe((show) => (this.render = show));
  }

  logoutUser() {
    this.loginService.logoutUser();
  }
}
