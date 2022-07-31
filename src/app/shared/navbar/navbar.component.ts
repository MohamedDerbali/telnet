import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  userConnected :any;
  constructor(private appServicesService: AppServicesService) {
  }
  ngOnInit(): void {
    let connectedUserToken = localStorage.getItem('token');
    this.appServicesService
      .getDataFromToken(connectedUserToken)
      .subscribe((res) => {
        this.userConnected = res;
        console.log(this.userConnected)
      });
    localStorage.setItem("nav", "stats");
  }

  changeNavigation(propertyNavigation) {
    localStorage.setItem("nav", propertyNavigation);
  }
  activateNavigation(propertyNavigation) {
    return localStorage.getItem("nav") == propertyNavigation ? "nav-item menu-items active" : "nav-item menu-items";
  }
}
