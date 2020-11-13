import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
    // ==================== Form : Data Driven Form -  Reactive Forms ============
    /*
          Note:   -- Cần import vào module : ReactiveFormsModule từ @angular/forms
                  -- Import FormBuilder thuộc @angular/forms - Là DI - inject vào và sử dụng
                  -- Tạo form thông qua FormBuilder
                  -- Tương tụ FormGroup
                  -- Cách dụng :
                          + Thay new FormGroup => FormBuilder.group
                          + Không new FormControl => 'name' : ['Tham số mặc định', [Validators]]

                   -- Còn lại reset, set Value tượng tự
                   -- Phương thức kiểm tra form thay đổi : .valueChanges.subscribe(value => {})


     */
    public frmUser: FormGroup;
    public subscription: Subscription;

    constructor(
            private formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.createForm();
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    createForm = () => {
        this.frmUser = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.minLength(10),
                Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(5),
            ]],
            name: ['', [
                Validators.required,
            ]],
            phone: ['', [
                Validators.required,
            ]],
            address: ['', [
                Validators.required,
            ]],
        });

        this.subscription = this.frmUser.valueChanges.subscribe(data => {
            console.log(data);
        });
    };
    onSubmitForm = () => {
        console.log(this.frmUser);
        console.log(this.frmUser.value);

        if (this.frmUser.controls.email.errors && this.frmUser.controls.email.errors.required === true) {
            console.log('Email not empty');
        }
    };

}
