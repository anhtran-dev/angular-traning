import { Component, OnInit  , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component-interaction-child',
  templateUrl: './component-interaction-child.component.html',
  styleUrls: ['./component-interaction-child.component.css']
})
export class ComponentInteractionChildComponent implements OnInit {

  // ================Nhận dữ liệu từ component cha
  @Input ('active') active;
  @Input ('age') age;
  @Input ('name') name;
  @Input ('names') names;

  // ======================= Truyền dữ liệu từ component con -> component cha
  /*
    Note :  -- Cần import Output , EventEmitter từ @angular/core
            -- Cú pháp : (key) = "value"
   */
  public email  = '';
  public phone  = '';
  @Output('email') onHandelEmail = new EventEmitter<string>();
  @Output('phone') onHandlePhone = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendData = () => {
      this.onHandelEmail.emit(this.email);
      this.onHandlePhone.emit(this.phone);
  }


}
