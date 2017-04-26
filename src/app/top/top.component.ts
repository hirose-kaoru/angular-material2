import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  selectedValue: string;
  foods: Array<any>;
  
  constructor(private http: Http) {
    this.http.get('./src/data.json')
             .map(response => response.json().foods)
             .subscribe(res => this.foods = res);
  }

  ngOnInit() {
    
  }

}
