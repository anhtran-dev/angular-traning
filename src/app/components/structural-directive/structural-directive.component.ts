import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  // ========================== Structural Directive : *ngIf =====================
  // Note : *ngIf = "condition else elseBlock"
  // <ng-template #elseBlock>   ..........  </ng-template>
  // elseBlock :  tự đặt tên
  /*
      vd :
      <p *ngIf="radioSelected === 'primary' else selectRadioOther" >Name : {{Đúng thì thực hiện cái này}}</p>
      <ng-template #selectRadioOther>
          <p>Ngược lại thì thực hiện cái này</p>
      </ng-template>
   */
  // ng-container
  public isShowInfo = true;
  public name = 'Andy';
  public radioSelected = '';
  public age = null;
  // ======================== End if

  // ========================== Structural Directive : *ngFor =====================
  // Note : cú pháp : *ngFor = "let item of lists"
  // vd : <li *ngFor= "let item of cars " >{{item}}</li>
  /*
    Note :  -- index : chỉ số hiện tại của mảng
            -- first : Trả về true nếu là phần tử đầu tiên
            -- last :  Trả về true nếu là phần tử cuối cùng
            -- even :   Trả về true nếu là phần tử chắn
            -- odd :   Trả về true nếu là phần tử lẽ
            -- trackBy :  Dữ liệu đầu vào (index, item ) => return về một thuộc tính duy nhất (id)

    Cách dùng : ví dụ : -- *ngFor = "let item of lists ; let temp = index  "  => {{temp + 1}}  : lấy chỉ số mảng bắt đầu từ 1
                        -- *ngFor = "let item of lists ; let f = first  "  => <td [style.color] = "f === true ? 'red' : ''" :  style cho
                         phần tử đầu tiên của mảng
                        -- .....

   */
  public cars = ['Saab', 'Volvo', 'BMW', 'Lamborghini'];
  public products = [
    {
      id: '1',
      name: 'Russel Hickle',
      image: 'http://lorempixel.com/640/480/nightlife',
      description: 'description 1'
    },
    {
      id: '2',
      name: 'Geovanni Sporer',
      image: 'http://lorempixel.com/640/480/transport',
      description: 'description 2'
    }
  ];
  public productFromServe = [
    {
      id: '1',
      name: 'Russel Hickle',
      image: 'http://lorempixel.com/640/480/nightlife',
      description: 'description 1'
    },
    {
      id: '2',
      name: 'Geovanni Sporer',
      image: 'http://lorempixel.com/640/480/transport',
      description: 'description 2'
    },
    {
      id: '44',
      name: 'Freeda Lockman',
      image: 'http://lorempixel.com/640/480/nature',
      description: 'description 44'
    },
    {
      id: '45',
      name: 'Bette Weber',
      image: 'http://lorempixel.com/640/480/nightlife',
      description: 'description 45'
    },
    {
      id: '46',
      name: 'Skylar Harvey',
      image: 'http://lorempixel.com/640/480/cats',
      description: 'description 46'
    },
    {
      id: '47',
      name: 'Aylin Runolfsson',
      image: 'http://lorempixel.com/640/480/abstract',
      description: 'description 47'
    },
    {
      id: '48',
      name: 'Terrill Pagac',
      image: 'http://lorempixel.com/640/480/nightlife',
      description: 'description 48'
    },
  ];
  // ======================== End for

  // ========================== Structural Directive : *ngSwitchCase =====================
  /*
      Note :  -- Dùng để thay thế cho việc *ngIf lập lại nhiều lần
              -- Các biến cần quan tâm : [ngSwitch] , *ngSwitchCase , *ngSwitchDefault

   */
  public users = [
      {
        id: '3',
        name: 'Joy Cremin',
        country: 'US'
      },
      {
        id: '4',
        name: 'Palma Swaniawski',
        country: 'Switzerland'
      },
      {
        id: '5',
        name: 'Elsa Schuppe',
        country: 'Vanuatu'
      },
      {
        id: '6',
        name: 'Lessie Hammes',
        country: 'Tokyo'
      },
      {
        id: '7',
        name: 'Ashton Schumm',
        country: 'Peru'
      }
  ];

  // ========================== End switch case


  constructor() {
  }

  ngOnInit(): void {
  }

  LoadDataFromServe = () => {
    this.products = this.productFromServe;
  };
  TrackByProducts = (index, item) => {
    return item.id;
  };

}
