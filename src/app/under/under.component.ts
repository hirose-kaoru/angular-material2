import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-under',
  templateUrl: './under.component.html',
  styleUrls: ['./under.component.css']
})
export class UnderComponent implements OnInit {
 
  spaceScreens: Array<any>;


  constructor(private http: Http) { 
    this.http.get('./src/data.json')
             .map(response => response.json())
             .subscribe(res => {this.spaceScreens = res.screenshots; console.log(res)});
  }

  ngOnInit() {
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0) {
      this.spaceScreens[i].liked = 1;
    } else {
      this.spaceScreens[i].liked = 0;
    }
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }

}
