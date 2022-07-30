import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("nav", "stats");
  }
  changeNavigation(propertyNavigation) {
    localStorage.setItem("nav", propertyNavigation);
  }
  activateNavigation(propertyNavigation) {
    return localStorage.getItem("nav") == propertyNavigation ? "nav-item menu-items active" : "nav-item menu-items";
  }
}
