import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class1',
  templateUrl: './class1.component.html',
  styleUrls: ['./class1.component.sass']
})
export class Class1Component implements OnInit {
  newResult: object[];
  pageTitle: string;
  pageEnTitle: string;

  constructor() { }

  ngOnInit() {
    this.newResult = this.getData();
    this.pageTitle = '九九乘法表';
    this.pageEnTitle = 'MULTIPLICATION CHART';
  }

  getData() {
    const row = 9;
    const newResult = [];
    for (let i = 2; i <= row; i++) {
      const data = [] ;
      for (let g = 1; g <= row; g++) {
        data.push(i + ' x ' + g + ' = ' + i * g) ;
      }
      newResult.push({
        title: i.toString(),
        'data': data
      });
    }
    console.log('newResult', newResult);
    return newResult;
  }
}
