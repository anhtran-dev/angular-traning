import {Component, OnInit} from '@angular/core';
import {User} from '../../courses-management/models/user.class';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    // ==================== Form : Template-driven Forms ============
    /*
          Note :    -- Cần import module FormsModule từ @angular/forms
                    -- Xây dựng form bên template
                    -- Sử dụng [(ngModel)] để đọc và ghi dữ liệu input
                    -- Phản hồi về cho người dùng bằng những class CSS
                    -- Validate errors đến người dùng và tắt mở form controls (tắt , mở button submit)
                    -- Chia sẻ thông tin bằng Template Reference Variables (#name-variable)

                    -- Note : Khuyến cáo sử dụng cho các form ít field

                    -- Các class input trong angular :
                            + Sử dụng Template Reference Variables để xem -- Ex: #name-variable - gọi: {{name-variable.className}}
                            + Chú ý: Control ở đây thường là Input
                            + Demo : Nếu control không hợp lệ( tham khảo các thuộc tính của html input attribute -- Ex : required,
                             maxlength, pattient,) - (kèm theo pristine hoặc untouched ) add thêm border
                                  -- Ex : .ng-invalid:not(form){ border-left: 5px solid red }

                     -- Trạng thái :
                             + Trạng thái control được truy cập , focus, click vào :  (ng-touched : Đúng)  --  (ng-untouched : Sai
                             + Giá trị control đã có sự thay đổi  :  (ng-dirty  : Đúng)  -- (ng-pristine : Sai)
                             + Giá trị control hợp lệ : (ng-valid : Đúng) -- (ng-invalid : Sai)

                     -- Submit và lấy dữ liệu từ form :
                            + Thuộc kiểu NgForm từ @angular/forms
                            + Gán tên cho form : #name-form = "ngForm"   -- Ex : #frmAddUser = "ngForm"
                            + Ta sẽ lấy được giá trị của controls
                            + Chú ý : Cần bổ sung name cho các controls. Ex : <input name="email" />
                      -- Submit Form :
                            + Cú pháp : (ngSubmit) = "name_method()" // có thể truyền thêm valid hoặc form.value
                      -- Reset Form:
                            + Cú pháp : Form.reset();

                       -- Hiển thị các câu thông báo lỗi :
                            + Tắt validate HTML5: novalidate, autocomplate="false"
                            + Để lấy được lỗi cần gán tên = "ngModel" : Ex : #name-variable = "ngModel"
                            + Cú pháp : {{name-variable.errors}}  // Có thể in bằng json pipe
                                    -- Ex : name-variable.errors ? .required && name-variable.dirty
                                    -- Ex : name-variable.errors > .minlength && name-variable.dirty
                       -- Tổng hợp nhiều value controls vào 1 ngModel khác. Ex : address, phone vào Info
                            + Cú pháp : Wrapper các controls vào 1 thẻ <div> có ngModelGroup = "name-group"

     */

    public user: User = new User(null, null, null, null);

    constructor() {
    }

    ngOnInit(): void {
    }

    addUser = (frm: NgForm) => {
        if (frm.valid) {
            console.log(this.user);
        }
    };

    // onResetForm = (frm: NgForm) => {
    //     frm.reset();
    // }
}
