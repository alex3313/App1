import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.validateUser()) {
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.user
        }
      };
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.router.navigate(['/inicio'], navigationExtras);
    } else {
      console.error('Usuario no válido');
    }
  }

  validateUser() {
    const usernamePattern = /^[a-zA-Z0-9]{3,8}$/;
    const passwordPattern = /^\d{4}$/;
    return (
      usernamePattern.test(this.user.username) && passwordPattern.test(this.user.password)
    );
  }
}
