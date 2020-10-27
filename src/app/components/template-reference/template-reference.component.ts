import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  //   ================== Template reference
  constructor() { }

  ngOnInit(): void {
  }
  getData = (email): void => {
    console.log(email);
  }

  getDataForm = (): void => {
    console.log(this.name.nativeElement.value);
  }

}
