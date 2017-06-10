import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'football-players',
  templateUrl: 'football-players.component.html',
})

export class footballPlayersComponent implements OnInit {

  @Input() footballPlayer;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }

  title = "Manage your football players here";
  constructor() {}
  ngOnInit() {}
}
