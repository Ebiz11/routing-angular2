import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
})
export class adminComponent implements OnInit {
  title = "Dashboard";

  constructor(private router: Router) {}

  ngOnInit() {}

  logOut() {
    localStorage.clear();
  	this.router.navigate(['/login']);
  }
}
