import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AppServicesService } from '../app-services.service';
import { ProjectsModalNameComponent } from '../projects-modal-name/projects-modal-name.component';
import { ProjectsModalPasswordComponent } from '../projects-modal-password/projects-modal-password.component';
import { ProjectsModalComponent } from '../projects-modal/projects-modal.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userConnected :any;
  photoLink : any = '../../assets/images/faces/iheb.png';
  ngOnInit(): void {
    let connectedUserToken = localStorage.getItem('token');
    this.appServicesService
      .getDataFromToken(connectedUserToken)
      .subscribe((res) => {
        console.log(res);
        this.userConnected = res;
      });
      if(localStorage.getItem('photo')){
        this.photoLink = localStorage.getItem('photo');
      }
  }
  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<ProjectsModalComponent, any> | undefined;
  modalDialogName: MatDialogRef<ProjectsModalNameComponent, any> | undefined;
  modalDialogPassword: MatDialogRef<ProjectsModalPasswordComponent, any> | undefined;
  constructor(public matDialog: MatDialog, private appServicesService: AppServicesService) { }
  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
            this.modalDialog?.close()
            this.modalDialogName?.close()
            this.modalDialogPassword?.close()
          }
      }
  }
  openModal() {
    
    this.dialogConfig.id = "projects-modal-component";
    this.dialogConfig.height = "450px";
    this.dialogConfig.width = "450px";
    this.modalDialog = this.matDialog.open(ProjectsModalComponent, this.dialogConfig);
  }
  openModalName(){
    this.dialogConfig.id = "projects-modal-name-component";
    this.dialogConfig.height = "320px";
    this.dialogConfig.width = "450px";
    this.modalDialogName = this.matDialog.open(ProjectsModalNameComponent, this.dialogConfig);
  } 
  openModalPassword(){
    this.dialogConfig.id = "projects-modal-password-component";
    this.dialogConfig.height = "450px";
    this.dialogConfig.width = "450px";
    this.modalDialogPassword = this.matDialog.open(ProjectsModalPasswordComponent, this.dialogConfig);
  }

}
