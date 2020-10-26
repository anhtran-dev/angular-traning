import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  // ============================ Attribute directive  =====================
  // ----- ngClass
  // ----- ngStyle
  // 1. ==========  ngClass
  /*
    Note : -- Dùng để xóa hoặc thêm nhiều class cùng một lúc
            -- Viết trực tiếp trong template hoặc class typescript

            -- Cú pháp : +  [ngClass] = []
                         +  'key' : "{'classA' : condition}" => nếu value trả về true => thêm class , ngược lại => xóa class

   */
    public isSpecial = true;
    public isPadding = true;

  // ========================== End
  // 2. ========== ngStyle

  // ========================== End
  constructor() { }

  ngOnInit(): void {
  }
  setClasses = () => {
    return {
      'danger-color border-bottom': this.isSpecial === true,
      'pt-10': this.isPadding === true,
      'text-primary' : !this.isSpecial
    };
  }

}
