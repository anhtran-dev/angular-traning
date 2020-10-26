import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  //  ============== Pipe
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
  public date = new Date();
  public users = [
    {
      id : '1',
      name : 'Otis Towne',
      address : 'Port Ryannport'
    },
    {
      id : '2',
      name : 'Estella Goodwin',
      address : 'Evelinebury'
    },
    {
      id : '3',
      name : 'Armand Howe',
      address : 'Paigeburgh'
    },
    {
      id : '4',
      name : 'Mrs. Mireille Kuhlman',
      address : 'West Ivyberg'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
