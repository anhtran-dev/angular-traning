import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  // ======================= HttpClient ==================
  /*
        -- Note : -- Cần import module : HttpClientModule từ @angular/common/http
                  -- Các thư viện sử dụng : HttpClient, HttpErrprResponse từ @angular/common/http
                            + err.error instanceofError => Client error => err.error.message
                            + Ngược lại : lỗi server => err.status và err.error
                            + Bao gồm các Method Http: GET, POST, PUT , DELETE
   */
  constructor() { }

  ngOnInit(): void {
  }


}
