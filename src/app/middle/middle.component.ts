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

  folders = [
    {
      name: `写真`,
      updated: new Date('4/14/17'),
    },
    {
      name: `音楽`,
      updated: new Date('4/15/17'),
    },
    {
      name: `Excel`,
      updated: new Date('4/16/17'),
    },
  ]

  notes = [
    {
      name: 'レシピ表',
      updated: new Date('12/17/17'),
    },
    {
      name: 'コマンド表',
      updated: new Date('12/18/17'),
    },
    {
      name: 'アドレス帳',
      updated: new Date('12/19/17'),
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
