import { Component, OnInit } from '@angular/core';

import { Album } from "./albums/album.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'My Angular Albums';
  titleCounter = 1;
  numbers: number[];

  ngOnInit(): void {
    // change detection
    // create an interval timer, where every 2 seconds,
    // you update the titleCounter by one. After 6 seconds cancel the interval.
    const interval = setInterval(() => this.titleCounter++, 2000);
    setTimeout(() => clearInterval(interval), 6000);

    this.numbers = [1, 2, 3];

    const timerID = setInterval(() => {
      // this.numbers.push(4);
      this.numbers = [...this.numbers, 4];
      console.log(this.numbers);
    }, 1000);

    setTimeout(() => {
      clearInterval(timerID );
    },  4000);
  }
}
