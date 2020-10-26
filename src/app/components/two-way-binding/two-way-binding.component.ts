import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  // Đồng bộ hóa dữ liệu giữa component và view
  // 1. -- Cần import  : FormsModule (Vào module để import - App Module)
  // 2. -- Khai báo biến
  // 3. -- cú pháp : [(ngModel)] = "value"  => vd : [(ngModel)] => "name"
  // Note : [ngModelOptions]="{standalone: true}"

  public name = null;
  public gender = '';
  public checked = true;
  public radioSelected = '';

  constructor() { }

  ngOnInit(): void {
  }

}
