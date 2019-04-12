import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div style="text-align:center;">
  <h1 class="jumbotron my-5 mx-5">
    <!--  Welcome to {{ title | reverseStr}}!  -->
    Welcome to {{ title }}!
  </h1>
  <button
  type="button"
  routerLink="/albums"
  class="btn btn-primary text-center mt-3 mx-auto"
  >
  View Albums
</button>
</div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  title = "My Angular Albums";
  constructor() { }

  ngOnInit() {
  }

}
