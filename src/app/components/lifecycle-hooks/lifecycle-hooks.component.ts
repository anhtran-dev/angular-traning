import {AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, AfterViewChecked, ElementRef} from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
    templateUrl: './lifecycle-hooks.component.html',
    styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterViewChecked {
    public previousTotal = 0;
    public content = ' a type specimen book. It has survived not only five centuries, but also the ';
    public jobs = [
        {
            id: '1',
            name: 'Coordinator'
        },
        {
            id: '2',
            name: 'Director'
        },
        {
            id: '3',
            name: 'Administrator'
        },
        {
            id: '4',
            name: 'Representative'
        },
        {
            id: '5',
            name: 'Analyst'
        },
    ];

    // ====================== Lifecycle Hooks : Vòng đời của một ứng dụng  ==============
    /*
        Note : -- Là các phương thức của Directive và Component như việc tạo ra, thay đổi, hủy
              -- Mỗi hook thuộc về một interface
              -- constructor
              -- ngOnChanges
              -- ngOnInit
              -- ngDoCheck
                    -- ngAfterContentInit
                    -- ngAfterContentChecked
                    -- ngAfterViewInit
                    -- ngAfterViewChecked
              -- ngOnDestroy
     */
    constructor() {
        console.log('construct');
    }

    // ====================== Lifecycle hook : ngOnInit ==================
    /*
        Note : -- Thời gian  + Khởi tạo directive/ component sau khi hiển thị lần  đâu tiên và set các thuộc tính đầu vào directive /
                                        component
                             + Chỉ gọi 1 lần duy nhất, sau khi hook ngOnChanges() được gọi lần đầu tiên
               -- Dùng để khởi tạo các giá trị

     */
    ngOnInit(): void {
        console.log('ngOnInit');
    }

    // ====================== Lifecycle hook : ngOnDestroy ==================
    /*
        Note : -- Được gọi khi component bị hủy, dùng để hủy các kết nối, giải phòng bộ nhớ
        Ex : Component kết nối api , database, route -> nên hủy để giải phóng bộ nhớ

     */
    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

    // ====================== Lifecycle hook : ngOnChanges ==================
    /*
        Note :  -- Được thực hiện khi INPUT có sự thay đổi . Đươc quản lí thông qua đối tượng Simple Changes, được gọi trước ngOnInit
                -- Cho ta một đối tượng kiểu Simple Changes
                        +  Ex : ngOnChanges(simpleChanges: SimpleChanges){}
                -- Simple Changes : thuộc về @angular/core
                        + Ex : import {SimpleChanges} from '@angular/core';
                -- Dùng để xử lí khi @Input có sự thay đổi
                        + currentValue : giá trị hiện tại
                        + previousValue : giá trị trước đó
                        + isFirstChange() : Thay đổi lần đầu tiên ? true : false
                        + Ex : simpleChanges.currentValue , simpleChanges.previousValue


     */

    ngOnChanges(simpleChanges: SimpleChanges): void {
        console.log('ngOnChanges');
        this.previousTotal = simpleChanges.total.previousValue;

    }

    @Input('total') total = 0;

    // ====================== Lifecycle hook : ngDoCheck ==================
    /*
        Note :  -- Được gọi sau ngOnChanges và ngOnInit, cữ mối lần gọi ngOnChanges => sẽ được gọi
     */
    ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    // ====================== Lifecycle hook : ngAfterViewInit   ==================
    /*
        Note :  -- Chính là phần view hiện tại
                -- Xử lí template + template refencence variables
                --  Sử dụng ViewChild
                -- Chú ý khi dùng template ref (#name-variables) cũng sử dụng ViewChild
                        + Ex : <my-component #abc />
     */
    @ViewChild('listJobs') listJobs: ElementRef;
    ngAfterViewInit(): void {
        console.log( this.listJobs);
    }

    // ====================== Lifecycle hook : ngAfterViewChecked  ==================
    /*
        Note :  -- Được gọi nhiều lần
                -- Chỉ dành cho component
     */

    ngAfterViewChecked(): void {
        console.log( this.listJobs);
    }


    submitForm = (text): void => {
        console.log(text);
    };

    addJob = (name): void => {
        this.jobs.push({
            id: '44',
            name: String(name)
        });
    };


}
