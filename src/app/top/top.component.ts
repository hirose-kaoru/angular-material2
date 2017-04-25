import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  color = 'primary';
  mode = 'determinate'
  value = 50;
  
  constructor() { }

  ngOnInit() {
    
  }

}
