import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material'
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  color = 'primary';
  mode = 'determinate'
  value = 50;

  color2: string;
  availableColors = [
    {name: 'none', color: ''},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ]

  constructor(public snackBar: MdSnackBar, public snackbarComponent: MdSnackBar) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackbarComponent.openFromComponent(SnackbarComponent, {
      duration: 2000,
    });
  }

}
