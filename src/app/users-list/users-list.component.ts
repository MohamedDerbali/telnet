import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any[];
  userConnected: any;
  constructor(private appServicesService: AppServicesService) { }

  ngOnInit(): void {
    let connectedUserToken = localStorage.getItem('token');
    this.appServicesService
      .getUsersList()
      .subscribe((res) => {
        console.log(res)
        this.users = res;
      });

    this.appServicesService
      .getDataFromToken(connectedUserToken)
      .subscribe((res) => {
        console.log(res.email)
        this.userConnected = res;
      });
  }
  removeUser(userId) {
    let connectedUserToken = localStorage.getItem('token');
    this.appServicesService
      .removeUser(userId)
      .subscribe((res) => {
        const index = this.users.findIndex(user => user.id == userId);
        console.log(index)
        this.users.splice(index, 1);
      });
  }
}
