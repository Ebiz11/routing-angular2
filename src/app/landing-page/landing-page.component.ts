import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
})
export class landingPageComponent implements OnInit {
  title = "Landing Page";
  constructor() {}
  ngOnInit() {}
}
