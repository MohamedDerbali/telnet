import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-projects-modal',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.css']
})
export class ProjectsModalComponent implements OnInit {
  userConnected :any;
  constructor(private dialogRef: MatDialog, private appServicesService: AppServicesService) { }

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
  public _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
  uploadProfilePhoto(user,files){
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
        console.log(reader.result);
        this.appServicesService.changeUserImage({user_id: user?.user_id,image: this._base64ToArrayBuffer(reader.result)}).subscribe((res) => {
          // console.log("herres")
        });
    };
    
    
    // {"user_id":"1","image":"424D5E070000000000003E00000028000000EF"}
  }
}
