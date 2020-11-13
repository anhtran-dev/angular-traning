import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-custom-validation',
    templateUrl: './custom-validation.component.html',
    styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent implements OnInit {

    @Input() controls;
    @Input() controlName;

    constructor() {
    }

    get message(): void {
        console.log(this.controls);
        for (const err in this.controls.errors) {
            if (this.controls.dirty) {
                return this.getErrorsMessage(err, this.controls.errors[err]);
            }
        }
        return null;
    }

    ngOnInit(): void {
    }

    getErrorsMessage(err, value): void {
        const messages = {
            required: `${this.controlName} is required`,
            minlength : `Minlength : ${value.requiredLength} character`,
            pattern : `${this.controlName} not match`,
        };
        return messages[err];
    };


}
