import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  color = 'primary';
  mode = 'determinate'
  value = 50;
  spaceScreens: Array<any>;
  
  constructor(private http: Http) {
    this.http.get('./src/data.json')
             .map(response => response.json().screenshots)
             .subscribe(res => this.spaceScreens = res);
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
