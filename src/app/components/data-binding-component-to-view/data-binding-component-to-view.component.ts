import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-component-to-view',
  templateUrl: './data-binding-component-to-view.component.html',
  styleUrls: ['./data-binding-component-to-view.component.css']
})
export class DataBindingComponentToViewComponent implements OnInit {
  // ============================ Data binding - Component -> View
  // 1. ++++++++ interpolation : {{value}} (in view)  (string , number , function, image ,....)

  public name  =  'Andy';
  public age  =  10;
  public isMarried  =  false;
  public user = {
    name : 'Lazy',
    email : 'lazy@gmail.com'
  };
  public links = 'https://tintaynguyen.com/wp-content/uploads/2020/03/1583688591-8584-to-1-15792449059781593332846.jpg';

  // 2.++++++++ property binding : [property-name] ="value"  (in view)  (src, value, href , disabled , hidden ,.)

  public urlAvatar = 'https://images.kienthuc.net.vn/zoom/800/uploaded/ctvcongdongtre/2020_07_02/1/gai-xinh-rmit-lam-clip-khoe-hang-hieu-thu-hut-trieu-view-hinh-5.jpeg';
  public widthImage = 350;
  public isDisabled = true;
  // Other : bind-property-name = "value"
  public srcImage = 'https://kenhfa.com/upload/photo/2019/01/31/gai-xinh-nong-bong-85-463668.jpg';

  // 3.+++++++++ attribute: [attr.attribute-name] = "value"  (colspan , href , border, height , width ...)

  public widthTable = 300;


  // 4.+++++++++ class binding: [class.class-name] = "value"  (colspan , href , border, height , width ...)
  // - chỉ áp dụng cho một class
  // - sử dụng 1 biến boolean , 1 biến number, string để so sánh
  public isBorder = true;
  public isHover = true;

  // 5.++++++ style binding : [style.style-name] = "value" (style css)
  // - chỉ áp dụng cho một style

  public isTextRed = true;
  public isMainBorder = true;
  public sizeText = 30;


  // ============================================== End
  constructor() { }

  ngOnInit(): void {
  }

  showName = () => {
    return this.user.name;
  }

}
