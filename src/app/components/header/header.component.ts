import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public isLogin = true;

    constructor(
            public routeService: Router
    ) {
    }

    ngOnInit(): void {
        if (localStorage.getItem('user')) {
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }
    }

    navigate = (url) => {
        // return this.routeService.navigate([url]);
        return this.routeService.navigateByUrl(url);
    };

    onLogout = () => {
        localStorage.removeItem('user');
        this.redirectLogin();
    };

    redirectLogin = () => {
        return this.routeService.navigate(['login']);
    };

}
