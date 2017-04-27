import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  selectedValue: string;
  foods: Array<any>;
  
  constructor(private http: Http, public dialog: MdDialog) {
    this.http.get('./src/data.json')
             .map(response => response.json().foods)
             .subscribe(res => this.foods = res);
  }

  ngOnInit() {
    
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
