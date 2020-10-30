import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
  // ===================== Services
  /*
      Note :  -- Cú pháp CLI : ng g service name-service
              -- Cần import service vào mảng providers tại module
              -- Inject vào constructor sử dụng mà không cần khởi tạo đối tượng
              -- vd : constructor( private movieService : MovieService ) {}
   */
  constructor() { }

  ngOnInit(): void {
  }

}
