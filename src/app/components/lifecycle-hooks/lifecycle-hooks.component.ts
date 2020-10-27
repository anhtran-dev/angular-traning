import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {
  // ====================== Lifecycle Hooks : Vòng đời của một ứng dụng  ==============
  /*
      Note : -- Là các phương thức của Directive và Component như việc tạo ra, thay đổi, hủy
            -- Mỗi hook thuộc về một interface
            -- constructor
            -- ngOnChanges
            -- ngOnInit
            -- ngDoCheck
                  -- ngAfterContentInit
                  -- ngAfterContentChecked
                  -- ngAfterViewInit
                  -- ngAfterViewChecked
            -- ngOnDestroy
   */
  constructor() { }

  ngOnInit(): void {
  }

}
