import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scroll() {
    window.scrollTo(100, 100);
    console.log('飛べ');
  }
  
}
