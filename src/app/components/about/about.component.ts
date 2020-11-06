import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(
            public router: Router
    ) {
    }

    ngOnInit(): void {
      localStorage.removeItem('key');
    }

    onAccess = (key: string) => {
      if (key === '123456'){
          localStorage.setItem('key', key);
          return this.router.navigate(['']);
      }
    };

}
