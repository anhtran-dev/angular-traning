import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public email: string;
    public password: string;

    constructor(
            public routerService: Router
    ) {
    }

    ngOnInit(): void {
      this.checkLogin();
    }

    checkLogin = () => {
        if (localStorage.getItem('user')) {
              this.redirectToHome();
        }
    };
    redirectToHome = () => {
      return this.routerService.navigate(['']);
    }

    onLogin = () => {

        if (this.email === 'job@gmail.com' && this.password === '123456') {
            const user = {
                email: this.email,
                password: this.password,
            };
            localStorage.setItem('user', JSON.stringify(user));
            this.redirectToHome();
        } else {
            console.log('Login not success');
        }

    };

}
