import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../../../services/logging.service';

@Component({
    selector: 'app-demo-serivce-second',
    templateUrl: './demo-serivce-second.component.html',
    styleUrls: ['./demo-serivce-second.component.css']
})
export class DemoSerivceSecondComponent implements OnInit {
    private loggingService: LoggingService;

    constructor(loggingService: LoggingService) {
        this.loggingService = loggingService;
    }

    ngOnInit(): void {
    }

    onClickHere = (): void => {
        this.loggingService.logging();
    }

    // logging = (): void => {
    //     console.log('hello');
    // }

}
