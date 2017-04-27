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
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  
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
