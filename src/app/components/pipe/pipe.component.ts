import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

    //  ============== Pipe có sẵn
    /*
        Note :  -- Dùng để biến đổi dữ liệu trước khi hiển thị ra cho người dùng
                -- Nhận vào một giá trị và trả ra ngoài 1 giá trị
                -- Cần import module @angular/common  ( Đối với angular 2)
                -- Cách sử dụng một số pipe có sẵn :
                          + In hoa : UpperCase
                          + Thường : LowerCase
                          + Viết hoa chữ đầu : TitleCase
                          + Cắt kí tự : Slice
                          + Xử lí số thực : number : '1.0-3' // min.min-max
                                                      -- 1 : số chữ số phần số nguyên - nếu thiếu thêm số 0
                                                      -- 0 : số chữ số phần thập phân tối thiểu - nếu thiếu thêm số 0
                                                      -- 3 : số chữ số phần thập phân tối đa
                          + Phần trăm : Percent
                          + Tiền tệ : currency : số |currency[:code][:'đơn vị tiền tệ' [:1.0-3]]  ex : 30.5 | currency: 'VND'
                          + Xử lí ngày tháng : Date
                          + Hiển thị dữ liệu dạng object : Json
                          + Kết hợp các pipe
                 -- Tự định nghĩa 1 pipe

     */
    public title = 'five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more rece';
    public content = 'AS OPPOSED TO USING \'CONTENT HERE, CONTENT HERE\', MAKING IT LOOK LIKE READABLE ENGLISH. MANY DESKTOP PUBLISHING PACKAGES AND WEB';
    public price = 35.234234;
    public result = 0.74534;
    public cars = ['Ford', 'BMW', 'Mercedes ', 'Audi', 'Lexus', 'Lamborghini'];
    public total = 34.6;
    private date = new Date();
    public users = [
        {
            id: '1',
            name: 'Otis Towne',
            address: 'Port Ryannport'
        },
        {
            id: '2',
            name: 'Estella Goodwin',
            address: 'Evelinebury'
        },
        {
            id: '3',
            name: 'Armand Howe',
            address: 'Paigeburgh'
        },
        {
            id: '4',
            name: 'Mrs. Mireille Kuhlman',
            address: 'West Ivyberg'
        }
    ];


// ====================== Custom pipe
    /*
        Note :  -- Tạo pipe bằng angular cli : ng g pipe new-name-pipe
     */
    public description = ` If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-`;
    public products = [
        {
            id: '10',
            name: 'Miss Molly West',
            status: false
        },
        {
            id: '23',
            name: 'Jackie Mann',
            status: true
        },
        {
            id: '39',
            name: 'Teresa Grimes',
            status: true
        },
        {
            id: '41',
            name: 'Kenyatta Tremblay',
            status: false
        }
    ];
    public idFilter: string;
    public nameFilter: string;
    public statusFilter = '';
    public numArrays = [1, 4, 2, 7, 3, 8, 45, 23, 6, 12];
    public sortNumber = '';
    public name = '';

    public orders = [
        {
            id : '1',
            name : 'Chief Division Executive',
           total : 43160
        },
        {
            id : '2',
            name : 'National Metrics Representative',
           total : 48740
        },
        {
            id : '3',
            name : 'Product Infrastructure Developer',
           total : 31512
        },
        {
            id : '4',
            name : 'Chief Paradigm Representative',
           total : 76227
        },
        {
            id : '5',
            name : 'Principal Data Architect',
           total : 67135
        },
        {
            id : '6',
            name : 'Principal Security Manager',
           total : 46782
        },
    ];
    public sortBy = 'name' ; // total
    public sortValue = 1 ; // 1 : tăng dần . -1 : giảm dần

    constructor() {
    }

    ngOnInit(): void {
    }

    sortOrders = (value) => {
        this.sortBy = value;
        this.sortValue = -this.sortValue;
    }

}
