import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm = {
    username: '',
    password: '',
    password2: '',
    email: '',
    first_name: '',
    last_name: '',
    is_superuser: false
  };
  constructor(private appServicesService: AppServicesService) { }
  changeInput = (e) => {
    this.userForm[e.target.name] = e.target.value;
  };
  changeChecked=(e)=>{
    this.userForm[e.target.name] = e.target.checked;
  };
  ngOnInit(): void {
  }
  adduser() {
    this.appServicesService
        .addUser(this.userForm)
        .subscribe((res) => {
          if (res) {
            location.href = '/usersList';
          }
        });
    console.log(this.userForm)
  }
}
