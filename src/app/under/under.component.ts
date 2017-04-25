import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under',
  templateUrl: './under.component.html',
  styleUrls: ['./under.component.css']
})
export class UnderComponent implements OnInit {
  tiles = [
    {text: '1番目', cols: 3, rows: 1, color: 'lightblue'},
    {text: '2番目', cols: 1, rows: 2, color: 'lightgreen'},
    {text: '3番目', cols: 1, rows: 1, color: 'lightpink'},
    {text: '4番目', cols: 2, rows: 1, color: '#ddbdf1'},
  ]

  color: string;
  availableColors = [
    {name: 'none', color: ''},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ]


  constructor() { }

  ngOnInit() {
  }

}
