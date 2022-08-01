import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-projects-modal-name',
  templateUrl: './projects-modal-name.component.html',
  styleUrls: ['./projects-modal-name.component.css']
})
export class ProjectsModalNameComponent implements OnInit {
  constructor(private dialogRef: MatDialog, private appServicesService: AppServicesService) { }
  userForm = {
    first_name: '',
    last_name: '',
  }
  fullname: any;
  userConnected :any;
  ngOnInit(): void {
    let connectedUserToken = localStorage.getItem('token');
    this.appServicesService
      .getDataFromToken(connectedUserToken)
      .subscribe((res) => {
        this.userConnected = res;
      });
  }
  close(){
    this.dialogRef.closeAll();
  }
  changeInput = (e) => {
    this.fullname = e.target.value;
    
  };
  modifyProfileInformation(userr){
    this.userForm = {...this.userForm, ...userr};
    this.userForm.first_name = this.fullname.substr(0, this.fullname.indexOf(' '));
    this.userForm.last_name = this.fullname.substr(this.fullname.indexOf(' '), this.fullname.length);
    this.appServicesService
      .modifyUser(userr.user_id, this.userForm)
      .subscribe((res) => {
        this.userConnected.last_name = res.last_name;
        this.userConnected.first_name = res.first_name;
        this.appServicesService.refreshToken(localStorage.getItem('token'));
      });
  }
}
