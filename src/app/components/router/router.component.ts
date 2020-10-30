import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

   // ========================== Router - Routing
  /*
        Note :  -- Thực hiện nhiệm vụ chính là chuyển trang, thay đổi một số thành phần mà không cần load lại trang
                -- Các vần đề cần chú ý :
                      + Tại index.html : <base href = "/" >
                      + Cần có một khu vực khai báo directive : <router-outlet> </router-outlet> nơi mà các nội dung cần thay đổi
                      + Cần import RouteModule, Router từ @angular/router

                -- Khai báo router root cho ứng dụng
                        + RouterModule.forRoot(arr_routes : Routes)
                        + 1 phần tử trong arr_routes sẽ là 1 object bao gồm tối thiểu :
                              -- path : khai báo đường dẫn đến 1 component , Ex : '' , 'home' ,...
                                    + Nếu khai báo path : '**' , thì nếu không tìm thấy router thì nó sẽ load component này
                                    + Ex : path : 'name-route'
                              -- component : khai báo component

                -- Tự động chuyển trang khi vào một router nào đó
                        + path : 'name-router'
                        + redirectTo : '/name-router-other'
                        + pathMatch : 'full' -> cho router biết làm thể nào để khớp một URL đến đường dẫn của router. Sẽ trả ra lỗi nếu
                                không khái báo

   */

  // ================== RouterLink - RouterLinkActive ============
  /*
        Note :  -- Chức năng : click vào và chuyển trang
                -- Khai báo link, đường dẫn cho một thẻ HTML thành 1 route.
                -- Cách sử dụng như một directive .
                -- Có thể áp dụng cho nhiều thẻ HTML , thẻ a , span ,button , ..

                -- Cú pháp : [routeLink] = "['/name-route',params]"  ( Có / ) (Ex : /product/1 )

                -- Thêm class active (hoặc name-class khác ) nếu route hiện tại trung với route khai báo
                -- Cú pháp : routeLinkActive = "active"
                -- Có thể thay "active) bằng  một tên khác hoặc sử dụng nhiều class cùng lúc
                -- Ex : routeLinkActive = "active1"  , routeLinkActive = "active1 active2"

                -- Trong trường hợp active có sử dụng route "/" và một số router khác . Sẽ xảy ra lỗi là active route "/" và router được
                 chọn. Cách khắc phục
                      + [routeLinkActiveOptions] = "exact : true" // Bỏ vào routeLinkActive
                      + Nên áp dụng cho route dạng cây : -- ex : /page , /page/contact

   */

  // ================== Chuyển trang bằng Event Binding ============
  /*
       Note :  -- Cần import Router từ @angular/router
               -- Inject  router như 1 service
               -- Sử dụng navigate : .navigate(['/name-router',params])
               -- Sử dụng navigateByUrl('name-router')

               -- Ex : navigateUrl('/product/' + id)
               -- Ex : navigateUrl('/products/${id}')

  */

  // ============================== lấy tham số trên router (params) - ActivatedRoute - snapshot
  /*
      Note :  -- Khai báo ActivatedRoute từ @angular/router
              -- Tiến hành Inject như một service ( inject vào constructor)
              -- Lấy tham số (params) trên đường dẫn
                    + Cần khái báo route có truyền tham số
                    + Cú pháp : .snapshot.params['name-params]
                    + Note snapshot : Không áp dụng khi chuyển trang trên cùng 1 router
                             + Ex : product/1 -> product/2 . Nên thông qua một trang khác

 */

  // ============================== lấy tham số dạng ? - Query params
  /*
      Note :  -- Truyền lên đường dẫn
                      + Bắt buộc : cần có routerLink
                      + Cách 1 : Truyền bên template :
                            -- Cú pháp : [queryParams] = "{key1 : value1, key2: value2,..}"
                            -- Ex : [queryParams] = "{page: 2 , sort : 'name'}"


                      + Cách 2: Truyền bên component
                            -- Cần import Router từ @angular/router
                            -- Inject như một service (constructor)
                            -- Sử dụng navigate: .navigate(['name-route', params], {queryParams: {key1: value1 , key2: value2, ....}})

             -- Lấy query params

 */
  constructor() { }

  ngOnInit(): void {
  }

}
