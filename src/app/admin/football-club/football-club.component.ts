import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'football-club',
  templateUrl: 'football-club.component.html',
})
export class footballClubComponent implements OnInit {
  title = "Manage your football club here";
  player: string = "I am player";

  constructor() {}

  ngOnInit() {}

  yell(e){
    alert("I am yelling");
  }
}
