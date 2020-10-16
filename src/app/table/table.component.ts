import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  servers;

  constructor() {
    this.servers = [
      {first : 'Ashish', last : 'Dhiman', age : 20 },
      {first : 'Harsh', last : 'Mishra', age : 24 },
      {first : 'Ankit', last : 'Kumar', age : 24 },

    ]
   }

  ngOnInit(): void {
  }

}
