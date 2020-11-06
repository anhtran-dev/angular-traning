import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

   // ========================== Router - Routing =========================================
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

  // ============================== lấy tham số trên router (params) - ActivatedRoute - snapshot  =======================
  /*
      Note :  -- Khai báo ActivatedRoute từ @angular/router
              -- Tiến hành Inject như một service ( inject vào constructor)
              -- Lấy tham số (params) trên đường dẫn
                    + Cần khái báo route có truyền tham số
                    + Cú pháp : .snapshot.params['name-params]
                    + Note snapshot : Không áp dụng khi chuyển trang trên cùng 1 router
                             + Ex : product/1 -> product/2 . Nên thông qua một trang khác
              --------------------------------------------------------------------------------------
              -- Subscribe: Áp dụng khi chuyển trang trên cùng 1 router
                    + Khai báo ActivatedRoute từ @angular/router
                    + Tiến hành Inject như một service ( inject vào constructor)
                    + Lấy tham số (params) trên đường dẫn
                          -- Cú pháp: this.subscription = this.activatedRoute.params.subscribe(data => {
                                          param = data.param;
                                       });

 */

  // ============================== lấy tham số dạng ? - Query params  =======================
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

  // ==========================  Children router  - navigate   ============================
  /*
     Note :  -- Cần import Router, ActivatedRoute từ @angular/core
                      + ActivatedRoute chính là URL hiện tại
                      + .parent : lùi về một phần từ và nối tên router
             -- Inject Router , ActivatedRoute như một service
             -- Sử dụng Navigate :
                  .navigate(['/name-router','params'], { relativeTo : this.activatedRoute.parent})

*/

  // ==========================  Children router  - Lấy tham số trên URL  ============================
  /*
     Note :  -- Trả về Subscription thuộc về 'rxjs'
             -- Cú pháp : this.activatedRoute.parent.params.subscribe(params => {params.name-params-in-url})
             -- Hàm trả về một đối tượng subscription

*/


  // ==========================  Router -- CanActive  ============================
  /*
     Note :  -- Tạo guard service bằng angular-cli : ng g guard name-guard
     Note :  -- Thường sử dụng cho Admin, kiểm tra xem có cho phép người dùng vào router đó hay ko
             -- Là một service - Khai báo trong providers của module
             -- Thuộc về @angular/router
                    + canActivate (component: TeamComponent, currentRoute : ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
                     nextState: RouterStateSnapshot)
                    + Cú pháp: implement CanDeactivate<Tên Component> (override lại canDeactivate)
                    + Trả về Observable<boolean>, Promises<boolean>, Boolean.
                    + Ex : Khi truy cập vào một route bất kì
                              -- Trả về true => có thể thoát ra
                              -- Trả về false => không thể thoát ra
             -- Vào router cần sử dụng khai báo: canDeactivate : [my-service]  // AuthGuard là service
             -- Note : Có thể tiêm bất kì service bất kì nào vào constructor của Service này để sử dụng . Ex : Router.navigate([''])

*/

  // ==========================  Router -- CanDeactivate  ============================
  /*
     Note :  -- Kiểm tra xem người dùng thoát ra khỏi router đó không
             -- Là một service - Khai báo trong providers của module
             -- Thuộc về @angular/router
                    + canDeactivate (route: ActivatedRouteSnapshot, state : RouterStateSnapshot):
                     Observable<boolean>|Promise<boolean>|boolean
                    + Cú pháp: implement CanActive (override lại canActive)
                    + Trả về Observable<boolean>, Promises<boolean>, Boolean.
                    + Ex : Khi truy cập vào một route bất kì
                              -- Trả về true => có thể truy cập
                              -- Trả về false => không thể truy cập
             -- Vào router cần sử dụng khai báo: canActive : [AuthGuard]  // AuthGuard là service
             -- Note : Có thể tiêm bất kì service bất kì nào vào constructor của Service này để sử dụng . Ex : Router.navigate([''])
*/

  // ==========================  Router -- Module  ============================
  /*
     Note :  -- Là một class có decorator là @NgModule({})
             -- Chú ý : khai báo module chạy đầu tiên tại main.ts
             -- Bao gồm: imports : [], declarations : [], bootstrap: [], providers: [], exports: []
                         + declarations : component, directives , pipes (note : chỉ thuộc về duy nhất 1 angular module)
                         + import : module,components, directives, pipes (nếu cần)
                                -- BrowserModule : bắt buộc import (ngIf, ngFor thuộc CommonModule - @angular/common), đã import
                                    CommonModule
                         + providers :  services
                         + bootstrap :  nơi khai báo component chạy đầu tiên
                         + exports : export/reexport module, components, directives, pipes . Không export một service

             -- Khai báo module chạy đầu tiên ở main.ts
             -- Xây dựng Module dùng chung chứa các pipes (bao gồm CommonModule) sau đó reexport CommonModule cho các module khác sử
              dụng . Tránh việc import lại nhiều lần


              ========= Có 2 loại Module ==========
              -- 1. Module chức năng
                    + Tạo thư mục Module bằng angular-cli  : ng g module name-module
                    + Tiến hành import các component, service, pipe của riêng module
                    + Kéo module vào AppModule (module chạy chính) - dùng từ khóa import
                            -- Note : Các module (CommonModule ) cần import để sử dụng các dỉrective cần thiết
                    + Tiền hành tách routing (lưu ý các tên class) :
                            -- Lúc này là module con => RouterModule.forChild(Routes[])
                            -- Note : Routing của APP cần import sau Module con


               --2. Module dùng chung -- SharedModule
                    + Tạo thư mục Module bằng angular-cli  : ng g module name-module
                    + Tiến hành import các component, service, pipe của riêng module
                    + Muốn các module khác sử dụng được SharedModule => dùng export
                            -- Ex : declarations: [Pipe, Directive] -- exports : [Pipe, Directive]
                            -- Ex : declarations: [FormatNumberPipe] -- exports : [FormatNumberPipe]
                    + Module nào cần sử dụng chỉ cần import SharedModule
                    + Tips : import CommonModule và exports(CommonModule) để các module khác khi import SahredModule sẽ có CommonModule
                            -- CommonModule sử dụng cho *ngIf , *ngFor,...
*/
  constructor() { }

  ngOnInit(): void {
  }

}
