import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular';
  public isShow = true;
  public total = 0;
  public a: number;
  public b: number;

  toggleShowComponent = (): void =>  {
    this.isShow = !this.isShow;
  }
  getTotal = () => {
    this.total = this.a + this.b;
    console.log(this.total);
  }
}
