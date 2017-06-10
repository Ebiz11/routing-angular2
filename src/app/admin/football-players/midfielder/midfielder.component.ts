import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'midfielder',
  templateUrl: './midfielder.component.html'
})
export class midfielderComponent implements OnInit {
  title = "Midfielder List";
  constructor() {}
  ngOnInit() {}

  players = ['Ander Herrera', 'Dele Alli', 'Modric'];
}
