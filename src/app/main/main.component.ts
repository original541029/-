import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  openWin: boolean
  teacherData: object[]
  selectData: {}

  constructor() {
    this.openWin = false
    this.teacherData = [
      {
        name: '廖洧杰 liao',
        job: '前端工程師',
        photo: 'https://udemy-images.udemy.com/user/200_H/14240690_36cf_3.jpg',
        social: [
          'https://www.facebook.com/sfismy',
          'https://www.youtube.com/user/gonsakon/videos',
          'http://www.hexschool.com/'
        ],
        detail: '你好，我是六角學院的校長，洧杰，我是熱愛分享與交流的前端工程師，目前專注於兼容 Desktop / Mobile <網頁前端開發，期間已協助數百位平面設計師、網頁設計師導入標準網頁設計。<br/>同時我也是高雄前端社群創辦人，於2013年3月31日創立社群，每月固定舉辦前端主題聚會，至今已舉辦超過30場聚會，不重複參與人數破千位，2015年協助14位平面設計師、網頁工程師轉職為前端工程師。同時也是國立高雄大學資管前端兼任講師、業界講師。'
      },
      {
        name: '王志誠 Wang',
        job: '前端設計、工程師',
        photo: 'https://udemy-images.udemy.com/user/200_H/16629824_f55f.jpg',
        social: [
          'https://www.facebook.com/chihcheng.wang.3'
        ],
        detail: '大家好，我是王志誠 (Casper)，是由設計師轉為前端工程師，專長是視覺設計與前端整合、前端技術教育訓練、前端自動化，常用的工具、技術有 Sketch、Sass、Angular.js、Node.js、Gulp 等主流前端技術。<br/><br/>目前是高雄前端社群的核心成員，高雄前端社群除了會有中型的交流會、Workshop以外，我還會舉辦 CSS 讀書會(每月1~2次)，如果對 前端、CSS 有興趣，歡迎追蹤 FB / 高雄前端社群，將可以看到我們的活動。'
      }
    ]
    this.selectData = {
      name: '廖洧杰 liao',
      job: '前端工程師',
      photo: 'https://udemy-images.udemy.com/user/200_H/14240690_36cf_3.jpg',
      social: [
        'https://www.facebook.com/sfismy',
        'https://www.youtube.com/user/gonsakon/videos',
        'http://www.hexschool.com/'
      ],
      detail: '你好，我是六角學院的校長，洧杰，我是熱愛分享與交流的前端工程師，目前專注於兼容 Desktop / Mobile <網頁前端開發，期間已協助數百位平面設計師、網頁設計師導入標準網頁設計。<br/><br/>同時我也是高雄前端社群創辦人，於2013年3月31日創立社群，每月固定舉辦前端主題聚會，至今已舉辦超過30場聚會，不重複參與人數破千位，2015年協助14位平面設計師、網頁工程師轉職為前端工程師。同時也是國立高雄大學資管前端兼任講師、業界講師。'
    }
  }

  ngOnInit() {}

  changeStatus (e) {
    e.preventDefault()
    this.openWin = !this.openWin
  }

  setDataWin (data) {
    this.selectData = data
  }

}
