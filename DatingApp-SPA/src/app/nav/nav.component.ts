import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { tokenName } from '@angular/compiler';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private a: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.a.success('Logged in successfully');
    }, error => {
      this.a.error('Logged in failed');
    });
  }

  loggedIn() {
      const token = localStorage.getItem('token');
      return !! token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
