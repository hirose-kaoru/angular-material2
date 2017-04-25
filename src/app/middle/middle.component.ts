import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  selectedValue: string;

  foods = [
    {value: 'お寿司', viewValue: 'お寿司'},
    {value: 'ラーメン', viewValue: 'ラーメン'},
    {value: 'ステーキ', viewValue: 'ステーキ'},
    {value: '焼肉', viewValue: '焼肉'},
    {value: 'しゃぶしゃぶ', viewValue: 'しゃぶしゃぶ'},
    {value: 'つけ麺', viewValue: 'つけ麺'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
