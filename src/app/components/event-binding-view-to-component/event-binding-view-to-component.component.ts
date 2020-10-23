import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-view-to-component',
  templateUrl: './event-binding-view-to-component.component.html',
  styleUrls: ['./event-binding-view-to-component.component.css']
})
export class EventBindingViewToComponentComponent implements OnInit {
    // ====================Nhận dữ liệu từ view (event-name)
    public  count = 2 ;
    username = null;
    // Bắt các sự kiện của người dùng , click , keyup , dblclick , keyup , enter
    constructor() { }

    ngOnInit(): void {
    }

    login = (e) => {
      console.log(e.target.innerText);
    }

    redirectHome = (e) => {
      console.log(e.target.innerText);
    }

    increment = () => {
      this.count += 1;
    }

    onKeyUp = (e) => {
      this.username = e.target.value;
    }

    onTogglePassword = (e) => {
      console.log(e.target.checked);
    }

    onCheckConditions = (e) => {
      console.log(e.target.checked);
    }

}
