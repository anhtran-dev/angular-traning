import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../../../services/logging.service';

@Component({
    selector: 'app-demo-service-first',
    templateUrl: './demo-service-first.component.html',
    styleUrls: ['./demo-service-first.component.css']
})
export class DemoServiceFirstComponent implements OnInit {

    constructor(
            private loggingService: LoggingService
    ) {

    }

    ngOnInit(): void {
    }

    onClick = (): void => {
       this.loggingService.logging();
    }

    // logging = (): void => {
    //     console.log('hello');
    // }

}
