import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-serve',
  templateUrl: './json-serve.component.html',
  styleUrls: ['./json-serve.component.css']
})
export class JsonServeComponent implements OnInit {

  // ====================== Json server =================
  /*
      Note :  -- install : npm install -g json-server
              -- Tạo file db.json
              -- start file db.json: json-server --watch db.json
   */
  constructor() { }

  ngOnInit(): void {
  }

}
