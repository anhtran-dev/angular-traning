import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild,
    ElementRef,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-other-lifecycle-hooks',
    templateUrl: './other-lifecycle-hooks.component.html',
    styleUrls: ['./other-lifecycle-hooks.component.css']
})
export class OtherLifecycleHooksComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
    constructor() {
    }

    ngOnInit(): void {
    }

    // ====================== Lifecycle hook : ngContent  ==================
    /*
        Note :  -- Cú pháp : <ng-content></ng-content>
                -- Dùng để hiển thị các prop, html bên trong selector của 1 component
                           + Ex : <my-component> nội dung trong này sẽ được đổ vào ng-content </my-content>
                -- Dùng <ng-content select= ".name-class"> </ng-content>   : Để lấy 1 phần tử nào đó
                           + . : class
                           + # : id
                           + name-tag -- ex : p , span , div ,..
                           + [name-attribute] -- ex : [src], [alt]   // có thể tự đặt tên attribute
                           + [name-attribute = value] -- ex : [href = 'abc']
                           + [attribute1][attribute2]
     */

    // ====================== Lifecycle hook : ngAfterContentInit  ==================
    /*
        Note :  -- Sử dụng ng-content để kiểm tra -- Sử dụng ContentChild (Kiểu ElementRef)
                -- Chỉ được gọi 1 lần duy nhất
                -- Chỉ dành cho component

     */
    @ContentChild('value') value: ElementRef;

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
        console.log(this.value);
    }

    // ====================== Lifecycle hook : ngAfterContentChecked  ==================
    /*
        Note :  -- Được gọi nhiều lần
                -- Chỉ dành cho component
     */
    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }

    // ====================== Lifecycle hook : ngAfterViewInit   ==================
    /*
        Note :  -- Chính là phần view hiện tại
                -- Xử lí template + template refencence variables
                --  Sử dụng ViewChild
                -- Chú ý khi dùng template ref (#name-variables) cũng sử dụng ViewChild
                        + Ex : <my-component #abc />
     */
    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
    }

    // ====================== Lifecycle hook : ngAfterViewChecked  ==================
    /*
        Note :  -- Được gọi nhiều lần
                -- Chỉ dành cho component
     */
    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }


}
