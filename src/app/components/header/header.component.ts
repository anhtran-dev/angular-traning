import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
            public routeService: Router
    ) {
    }

    ngOnInit(): void {
    }

    navigate = (url) => {
        // return this.routeService.navigate([url]);
       return this.routeService.navigateByUrl(url);
    }
}
