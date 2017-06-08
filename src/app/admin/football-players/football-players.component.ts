import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'football-players',
  templateUrl: 'football-players.component.html',
})

export class footballPlayersComponent implements OnInit {
  title = "Manage your football players here";
  constructor() {}
  ngOnInit() {}
}
