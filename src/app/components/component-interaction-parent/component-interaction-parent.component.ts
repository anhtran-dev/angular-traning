import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-interaction-parent',
  templateUrl: './component-interaction-parent.component.html',
  styleUrls: ['./component-interaction-parent.component.css']
})
export class ComponentInteractionParentComponent implements OnInit {

  // ======== Truyền dữ liệu giữa các components ( @Input  -- @Output )
  // 1. ---------------- @Input : Truyền dữ liệu từ component cha -> component con
  /*
      Note : -- Cú pháp : [key] = "value" - để khai báo giá trị nhận vào
   */
  public active = false;
  public age = 16;
  public name = 'Jame Jac';
  public names = ['Lazy', 'Luxi', 'Yacod', 'Zxxxi'];
  public email: string;
  public phone: string;
  constructor() { }

  ngOnInit(): void {
  }
  onGetEmail = (value) => {
    this.email = value;
    console.log(value);
  }
  onGetPhone = (value) => {
    this.phone = value;
    console.log(this.phone);
  }

}
