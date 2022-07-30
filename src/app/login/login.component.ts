import { AppServicesService } from './../app-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private appServicesService: AppServicesService) {}
  userForm = {
    username: '',
    password: '',
  };
  ngOnInit(): void {}
  changeInput = (e) => {
    this.userForm[e.target.name] = e.target.value;
  };
  login = () => {
    console.log(this.userForm);
    if (this.userForm && this.userForm.username && this.userForm.password) {
      this.appServicesService
        .login(this.userForm.username, this.userForm.password)
        .subscribe((res) => {
          if (res && res.access) {
            localStorage.setItem('token', res.access);
            location.href = '/';
          }
        });
    }
  };
}
